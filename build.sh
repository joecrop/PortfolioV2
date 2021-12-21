#!/bin/bash
cd src/blog
pip install mkdocs-material
mkdocs build -d ../build/blog
cd ../..
npm run build