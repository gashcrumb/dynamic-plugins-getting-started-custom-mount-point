#!/bin/bash

# --- Configuration ---
# Backstage application image
APP_IMAGE_DEFAULT="quay.io/rhdh/rhdh-hub-rhel9:next"
APP_IMAGE=${APP_IMAGE:-$APP_IMAGE_DEFAULT}

# Dynamic plugins local directory
PLUGIN_DIR_DEFAULT="./dynamic-plugins-root"
PLUGIN_DIR=${PLUGIN_DIR:-$PLUGIN_DIR_DEFAULT}

# Application configuration file on the host
# IMPORTANT: Ensure you have an 'app-config.yaml' in the current directory.
# You might need to copy 'app-config.example.yaml' to 'app-config.yaml' and customize it.
APP_CONFIG_HOST_DEFAULT="./app-config.yaml"
APP_CONFIG_HOST=${APP_CONFIG_HOST:-$APP_CONFIG_HOST_DEFAULT}
# --- End Configuration ---

# Define mount arguments based on configured paths
PLUGIN_MOUNT_ARG="-v ${PLUGIN_DIR}:/opt/app-root/src/dynamic-plugins-root:Z"
CONFIG_MOUNT_ARG="-v ${APP_CONFIG_HOST}:/opt/app-root/src/app-config.yaml:Z"

echo "Starting Backstage container..."
echo "  Using Image: ${APP_IMAGE}"
echo "  Mounting plugins from (host): ${PLUGIN_DIR}"
echo "  Mounting app config from (host): ${APP_CONFIG_HOST}"
echo "  Container LOG_LEVEL will default to 'info' (override with LOG_LEVEL env var)"
echo "  Container HOSTNAME will default to 'localhost' (override with HOSTNAME env var)"
echo "---"

podman run \
    -e LOG_LEVEL=${LOG_LEVEL:-info} \
    --pull=newer \
    ${PLUGIN_MOUNT_ARG} \
    ${CONFIG_MOUNT_ARG} \
    -p 7007:7007 \
    --entrypoint='["node", "packages/backend", "--config", "app-config.yaml"]' \
    "${APP_IMAGE}"
