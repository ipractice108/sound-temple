# How to Add Images to Sound Temple Website

## Required Files

### 1. Logo
**Location:** `images/logo.png`
- **Format:** PNG with transparent background
- **Size:** Recommended 200x50px (will scale to max-height: 50px)
- **File name:** MUST be exactly `logo.png` (lowercase)

### 2. Service Images
**Location:** `images/services/`

You need **10 images** (2 for each service):

#### Sound Temple
- `sound-temple.jpg` (280x280px or larger, 3:2 ratio)
- `sound-temple-detail.jpg` (1200x800px for detail page)

#### Handpan Training
- `handpan.jpg`
- `handpan-detail.jpg`

#### Cacao Ceremony
- `cacao-ceremony.jpg`
- `cacao-ceremony-detail.jpg`

#### Tea Ceremony
- `tea-ceremony.jpg`
- `tea-ceremony-detail.jpg`

#### Yoga & Nail Standing
- `yoga-nail.jpg`
- `yoga-nail-detail.jpg`

## Adding Images via Git

### Option 1: Command Line (if you have git access)

```bash
# Navigate to project directory
cd /path/to/sound-temple

# Copy your images to the correct directories
cp /path/to/your/logo.png images/
cp /path/to/your/service-images/*.jpg images/services/

# Add images to git
git add images/

# Commit
git commit -m "Add website images"

# Push
git push origin claude/bali-retreat-website-miwb0
```

### Option 2: GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to `images/services/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Make sure file names match exactly (lowercase, with hyphens)
6. Commit changes

### Option 3: Using a Code Editor

If you're using VS Code, WebStorm, or similar:

1. Open the project folder
2. Navigate to `images/services/` in the file tree
3. Drag and drop your images into the folder
4. Commit and push via your editor's Git interface

## Image Requirements

### File Naming
- **MUST be lowercase**: `sound-temple.jpg` NOT `Sound-Temple.jpg`
- **Use hyphens, not underscores**: `cacao-ceremony.jpg` NOT `cacao_ceremony.jpg`
- **Extension must be .jpg or .png**: Not .jpeg, .JPG, .PNG

### Image Dimensions
- **Service cards:** Minimum 600x400px (3:2 ratio recommended)
- **Detail pages:** Minimum 1200x800px for best quality
- **Logo:** Flexible, but 200x50px recommended

### File Size
- Optimize images before uploading
- Service images: Under 500KB each
- Logo: Under 100KB
- Use tools like TinyPNG.com to compress

## Verifying Images

After adding images, run this command to check:

```bash
./check-images.sh
```

You should see ✅ for all files.

## Common Issues

### Images not showing?

1. **Check file names are exactly correct**
   ```bash
   ls images/services/
   ```
   Should show: `sound-temple.jpg`, NOT `Sound Temple.jpg` or `soundtemple.jpg`

2. **Check file extensions**
   - Use `.jpg` not `.jpeg` or `.JPG`
   - Use `.png` not `.PNG`

3. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

4. **Check file paths in HTML**
   - Should be: `images/services/sound-temple.jpg`
   - Not: `/images/services/sound-temple.jpg` or `./images/services/sound-temple.jpg`

### Still not working?

Check git status:
```bash
git status
```

Make sure images are tracked:
```bash
git add images/
git commit -m "Add images"
git push
```

## Temporary Solution

Until you add real images, the website will show grey placeholder boxes. The layout will still work correctly, but you'll see:
- Grey boxes instead of images
- Correct text and pricing
- Working navigation and buttons

## Need Help?

If images still don't show:
1. Check the browser console for errors (F12 → Console tab)
2. Verify file permissions: `ls -la images/services/`
3. Make sure you're viewing the latest version (hard refresh)
