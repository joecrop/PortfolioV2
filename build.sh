#!/bin/bash
npm build
cd mkdocs
pip install mkdocs-material
mkdocs build -d ../public/blog