#!/usr/bin/env python3
"""
Add cover images to markdown files based on frontmatter metadata.
"""
import os
import re
from pathlib import Path

def process_markdown_file(file_path):
    """Process a single markdown file to add cover image."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match frontmatter
    frontmatter_pattern = r'^---\n(.*?)\n---\n'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if not match:
        print(f"Skipping {file_path}: No frontmatter found")
        return False
    
    frontmatter = match.group(1)
    rest_of_content = content[match.end():]
    
    # Extract title and cover from frontmatter
    title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    cover_match = re.search(r'^cover:\s*(.+?)\s*$', frontmatter, re.MULTILINE)
    
    if not title_match or not cover_match:
        print(f"Skipping {file_path}: Missing title or cover in frontmatter")
        return False
    
    title = title_match.group(1).strip('"\'')
    cover = cover_match.group(1).strip()
    
    # Check if cover image already exists right after frontmatter
    if rest_of_content.strip().startswith(f'![{title}]({cover})') or \
       rest_of_content.strip().startswith(f'!['):
        print(f"Skipping {file_path}: Cover image already present")
        return False
    
    # Insert cover image
    image_markdown = f'\n![{title}]({cover})\n'
    new_content = f'---\n{frontmatter}\n---{image_markdown}\n{rest_of_content.lstrip()}'
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ Added cover image to {file_path}")
    return True

def main():
    """Main function to process all markdown files."""
    docs_dir = Path('src/content/docs')
    
    if not docs_dir.exists():
        print(f"Error: Directory {docs_dir} does not exist")
        return
    
    # Find all markdown files
    md_files = list(docs_dir.rglob('*.md')) + list(docs_dir.rglob('*.mdx'))
    
    print(f"Found {len(md_files)} markdown files")
    
    processed = 0
    for md_file in md_files:
        if process_markdown_file(md_file):
            processed += 1
    
    print(f"\nProcessed {processed} out of {len(md_files)} files")

if __name__ == '__main__':
    main()
