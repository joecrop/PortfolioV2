#!/bin/bash
cd src/blog
pip install mkdocs-material
mkdocs build -d ../../public/blog
cd ../..
npm run build