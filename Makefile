export PWD := $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
export PATH := $(PWD)/node_modules/.bin:$(PATH)
export SHELL := /bin/bash

.PHONY: all
all: build

.PHONY: env
env:
	@env

.PHONY: deps
deps: node_modules

node_modules/%: node_modules

node_modules: package.json
	npm install
	touch $@

.PHONY: gen
gen: deps proto readme

.PHONY: proto
proto := $(shell find src -type f -name '*.proto')
proto: deps $(patsubst src/%.proto, src/%_grpc_pb.d.ts, $(proto)) \
	$(patsubst src/%.proto, src/%_grpc_pb.js, $(proto)) \
	$(patsubst src/%.proto, src/%_pb.d.ts, $(proto)) \
	$(patsubst src/%.proto, src/%_pb.js, $(proto)) \
	$(patsubst src/%.proto, src/%_pb_service.d.ts, $(proto)) \
	$(patsubst src/%.proto, src/%_pb_service.js, $(proto))

.NOTPARALLEL: %_pb_grpc_pb.d.ts %_pb_grpc_pb.js %_pb.d.ts %_pb.js %_pb_service.d.ts %_pb_service.js
%_grpc_pb.d.ts %_pb_grpc_pb.js %_pb.d.ts %_pb.js %_pb_service.d.ts %_pb_service.js: %.proto
	grpc_tools_node_protoc \
		--plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:. \
		--ts_out=service=grpc-web:. \
		$(proto)
	grpc_tools_node_protoc \
		--plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
		--plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
		--js_out=import_style=commonjs,binary:. \
		--ts_out=service=grpc-node:. \
		--grpc_out=. \
		$(proto)

%.proto: node_modules/.bin/protoc-gen-ts node_modules/.bin/grpc_tools_node_protoc_plugin node_modules/.bin/grpc_tools_node_protoc

.PHONY: readme
readme: README.md

README.md: node_modules/.bin/readme package.json
	readme --yes

.PHONY: lint
lint: deps gen
	# tsc --noEmit
	eslint --fix $(shell find src -type f | grep -E '^.*(.js|.jsx|.ts|.tsx)$$') bin/*

.PHONY: build
build: deps gen lint
	tsc --declaration --declarationMap
	babel src --out-dir lib --extensions '.js,.jsx,.ts,.tsx'

.PHONY: bump
bump: bump.pre

.PHONY: bump.pre
bump.pre: node_modules/.bin/release-it
	release-it --preRelease --github.preRelease --ci

.PHONY: bump.alpha
bump.alpha: node_modules/.bin/release-it
	release-it --preRelease --preReleaseId=alpha --npm.tag=alpha --github.preRelease --ci

.PHONY: bump.beta
bump.beta: node_modules/.bin/release-it
	release-it --preRelease --preReleaseId=beta --npm.tag=beta --github.preRelease --ci

.PHONY: bump.rc
bump.rc: node_modules/.bin/release-it
	release-it --preRelease --preReleaseId=rc --npm.tag=rc --github.preRelease --ci

.PHONY: compat
compat: node_modules/.bin/browserslist
	browserslist

.PHONY: upgrade
upgrade: node_modules/.bin/ncu
	ncu -u
