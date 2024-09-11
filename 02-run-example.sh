#!/bin/bash

podman run -v ./dynamic-plugins-root:/opt/app-root/src/dynamic-plugins-root:Z -v ./app-config.example.yaml:/opt/app-root/src/app-config.example.yaml:Z -p 7007:7007 --entrypoint='["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.example.yaml"]' quay.io/janus-idp/backstage-showcase:next
