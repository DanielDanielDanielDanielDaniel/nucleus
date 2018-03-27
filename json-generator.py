import os, sys, json, argparse

def extract_icon(filename, category):
    # generate the icon info
    name = filename.replace('.svg', '')
    return {'name': name, 'category': category, 'filename': filename, 'sublabel': '5.3 / 6.2' }

def get_icons(path, category):
    # generate all the icons for the given category
    [_, _, files] = next(os.walk(os.path.join(path, category)))
    return [extract_icon(f, category) for f in files]

def read_source_dir(dirpath):
    # list all the categories and generate the data
    [_, categories, _] = next(os.walk(dirpath))
    return { category: icon for (category, icon) in [(c, get_icons(dirpath, c)) for c in categories] }

# parse the command line arguments

parser = argparse.ArgumentParser(description='Generate nucleus JSON')
parser.add_argument('-dir', help='directory with the icon hierarchy')
args = parser.parse_args()

# generate the data structure

data = read_source_dir(args.dir)

# output the json to stdout

print(json.dumps(data, indent=4))
