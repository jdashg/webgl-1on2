#! /usr/bin/env python3

import content_script_embed

import os
import pathlib
import shutil

DIR = pathlib.Path(__file__).parent
OUT = DIR / 'out'

def write_to(dest, data):
  print(f'   ({len(data)} bytes) => {dest}')
  dest.write_bytes(data)


def clean():
  print('[clean]')

  if OUT.exists():
    shutil.rmtree(OUT)

  os.mkdir(OUT)


def build_content_script():
  print('[build_content_script]')

  src = DIR / 'webgl-1on2.js'
  dest = OUT / 'webgl-1on2.content.js'

  data = src.read_bytes()
  data = content_script_embed.from_script(data)
  write_to(dest, data)

# -

clean();
build_content_script()
print('Build complete.')
