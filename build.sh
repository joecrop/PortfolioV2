#!/bin/bash
npm build
cd mkdocs
pip install mkdocs-material
mkdocs build -d ../build/blog