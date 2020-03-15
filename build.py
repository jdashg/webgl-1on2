#! /usr/bin/env python3

import content_script_embed

import os
import pathlib
import shutil

DIR = pathlib.Path(__file__).parent
WEB_EXT_OUT = DIR / 'web-ext/out'

def write_to(dest, data):
  print(f'   ({len(data)} bytes) => {dest}')
  dest.write_bytes(data)


def clean():
  print('[clean]')

  if WEB_EXT_OUT.exists():
    shutil.rmtree(WEB_EXT_OUT)

  os.mkdir(WEB_EXT_OUT)


def build_content_script(src, dest):
  print(f'[build_content_script {src}]')

  data = src.read_bytes()
  data = content_script_embed.from_script(data)
  write_to(dest, data)

# -

clean();
build_content_script(DIR / 'webgl-1on2.js', WEB_EXT_OUT / 'webgl-1on2.content.js')
print('Build complete.')
