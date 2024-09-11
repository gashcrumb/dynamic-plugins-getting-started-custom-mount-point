#!/bin/bash

rm -Rf dynamic-plugins-root/*

cp -R plugins/custom-mount-point-host/dist-dynamic dynamic-plugins-root/internal.backstage-plugin-custom-mount-point-host-dynamic
cp -R plugins/simple-test-card-green/dist-dynamic dynamic-plugins-root/internal.backstage-plugin-simple-test-card-green-dynamic
cp -R plugins/simple-test-card-blue/dist-dynamic dynamic-plugins-root/internal.backstage-plugin-simple-test-card-blue-dynamic