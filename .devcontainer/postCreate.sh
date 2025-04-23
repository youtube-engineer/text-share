#!/bin/bash

WORKSPACE_DIRECTORY="/workspace"

(
  cd $WORKSPACE_DIRECTORY

  # Set owner
  sudo chown -R $(id -un):$(id -gn) .
  sudo chown $(id -un):$(id -gn) node_modules /opt/pnpm/store /home/vscode/.cache/ /home/vscode/.cache/* /home/vscode/.ssh /home/vscode/.aws

  # Set safe directory
  git config --global safe.directory $WORKSPACE_DIRECTORY

  # Insall Node.js
  NVM_DIR="${NVM_DIR:-"/usr/local/share/nvm"}"
  . $NVM_DIR/nvm.sh
  nvm install 
  nvm use
  node -v

  git config --global user.email "chatgptinjapan@gmail.com"
  git config --global user.name "youtube-engineer"
)