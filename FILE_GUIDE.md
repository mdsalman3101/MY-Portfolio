# 📄 FILE GUIDE - Understanding Your Portfolio Files

## What Each File Does

---

## 1️⃣ `index.html` - The Main Page

**What it is:** The structure of your website. Contains all text, images, and sections.

**What it looks like:**
```html
<h1 class="hero-title">MD Salman</h1>
<p class="hero-subtitle">Full Stack Developer & B.Tech CSE Student</p>
```

**How to edit it:**
- Open with **Notepad** or **VS Code**
- Find the text you want to change
- Replace it with your text
- Save (Ctrl+S)
- Refresh browser to see changes

**Common edits:**

### Change Your Name
**Find this:**
```html
<h1 class="hero-title">MD Salman</h1>
```
**Change to:**
```html
<h1 class="hero-title">Your Name</h1>
```

### Change Your Title
**Find this:**
```html
<p class="hero-subtitle">Full Stack Developer & B.Tech CSE Student</p>
```
**Change to:**
```html
<p class="hero-subtitle">Your Title Here</p>
```

### Change Your Email
**Find this:**
```html
<a href="mailto:mdsalman181931@gmail.com" class="social-btn email">
    Email
</a>
```
**Change to:**
```html
<a href="mailto:YOUR_EMAIL@gmail.com" class="social-btn email">
    Email
</a>
```

### Change Your Phone Number
**Find this:**
```html
<span class="info-value">+91 8709931374</span>
```
**Change to:**
```html
<span class="info-value">+91 YOUR_NUMBER</span>
```

### Add a New Project

**Find this section:**
```html
<!-- PROJECT 1 - EXAMPLE (Replace with your projects) -->
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">E-Commerce Website</h3>
```

**Copy the entire `<div class="project-card">...</div>` block**

**Paste it again and change:**
```html
<h3 class="project-title">YOUR PROJECT NAME</h3>
<p class="project-description">
    What does your project do? Describe it here.
</p>
<div class="project-tech">
    <span class="tech-tag">Your Technology 1</span>
    <span class="tech-tag">Your Technology 2</span>
</div>
<div class="project-links">
    <a href="https://github.com/YOUR_USERNAME/PROJECT_NAME" target="_blank" class="project-link">
        View on GitHub
    </a>
    <a href="https://your-live-project-link.com" target="_blank" class="project-link live">
        Live Demo
    </a>
</div>
```

### Update Your Skills

**Find this section:**
```html
<div class="skill-item">
    <div class="skill-name">JavaScript</div>
```

**Copy this block and paste multiple times:**
```html
<div class="skill-item">
    <div class="skill-name">YOUR SKILL NAME</div>
    <div class="skill-level">
        <div class="skill-bar">
            <div class="skill-fill" style="width: 75%"></div>
        </div>
        <span class="level-text">Intermediate</span>
    </div>
</div>
```

**Change the percentage (75%) to show your level:**
- Beginner: 40-50%
- Intermediate: 60-75%
- Advanced: 80-95%
- Expert: 100%

### Update Education Section

**Find:**
```html
<h3 class="edu-title">Bachelor of Technology (B.Tech)</h3>
<p class="edu-major">Computer Science Engineering (CSE)</p>
<p class="edu-institution">Ganpat University, Gujarat</p>
```

**Change to your education details**

### Update Certifications

**Find:**
```html
<div class="cert-card">
    <div class="cert-logo">Cisco</div>
    <p class="cert-name">Cisco Certification</p>
</div>
```

**Change to your certifications**

---

## 2️⃣ `styles.css` - The Design & Colors

**What it is:** Controls how your portfolio looks - colors, fonts, spacing, animations.

**What it looks like:**
```css
:root {
    --accent-cyan: #00d4ff;     /* Bright cyan */
    --accent-purple: #7c3aed;   /* Purple */
}
```

**How to edit it:**
- Open with **Notepad** or **VS Code**
- Find the color code you want to change
- Replace with new color code
- Save and refresh browser

**Common edits:**

### Change Colors

**Find this at the top:**
```css
:root {
    --bg-primary: #0f1419;      /* Very dark background */
    --text-primary: #ffffff;    /* Main text - white */
    --accent-cyan: #00d4ff;     /* Bright cyan - PRIMARY ACCENT */
    --accent-purple: #7c3aed;   /* Purple - SECONDARY ACCENT */
}
```

**Change the color codes:**

**Popular color codes:**
```
Blue:        #0099ff
Green:       #00ff88
Pink:        #ff1493
Orange:      #ff6600
Red:         #ff3333
Yellow:      #ffed4e
```

**Example - Change cyan to green:**
```css
--accent-cyan: #00ff88;  /* Changed from #00d4ff */
```

### Increase Font Size

**Find:**
```css
.hero-title {
    font-size: 4rem;  /* This is the size */
}
```

**Change to:**
```css
.hero-title {
    font-size: 5rem;  /* Bigger! */
}
```

### Change Spacing

**Find:**
```css
:root {
    --spacing-xl: 2rem;  /* Large spacing */
}
```

**Change to larger or smaller values**

### Remove or Add Animations

**Find animations section:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**To remove animations, find:**
```css
.project-card:hover {
    transform: translateY(-10px);  /* Remove this */
}
```

---

## 3️⃣ `script.js` - The Interactivity

**What it is:** Makes your portfolio interactive - clickable elements, smooth scrolling, form handling.

**What it looks like:**
```javascript
// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    // ... code ...
}
```

**How to edit it:**
- Open with **Notepad** or **VS Code**
- Most of the time, you DON'T need to edit this
- There are comments explaining what each part does

**What it handles:**
- ✅ Mobile menu toggle
- ✅ Smooth scrolling when clicking links
- ✅ Contact form validation
- ✅ Scroll animations
- ✅ Keyboard shortcuts

**Keyboard shortcuts (already built in):**
- Press `/` → Scroll to contact section
- Press `h` → Scroll to home

---

## 4️⃣ `profile.jpg` - Your Photo

**What it is:** Your profile picture that shows on the portfolio.

**Requirements:**
- Must be named exactly: `profile.jpg`
- Should be a headshot/portrait
- Good quality
- 200x200px minimum (or larger)
- JPG, PNG, or WebP format

**How to replace it:**
1. Get a good photo of yourself
2. Rename it to: `profile.jpg`
3. Put it in the same folder as other files
4. Refresh browser

---

## 5️⃣ `README.md` - The Instructions

**What it is:** Complete step-by-step guide for everything.

**Includes:**
- How to deploy to GitHub
- How to make it appear on Google
- Troubleshooting
- Tips and tricks

---

## 📝 HOW TO EDIT FILES (Simple Methods)

### Method 1: Notepad (Windows)
1. Right-click on the file
2. Select "Open with" → "Notepad"
3. Edit the text
4. Press Ctrl+S to save
5. Refresh your browser

### Method 2: VS Code (Better Option)
1. Download VS Code: https://code.visualstudio.com/
2. Open VS Code
3. File → Open Folder → Select your Portfolio folder
4. Now you can edit all files in one place
5. Ctrl+S to save
6. Refresh browser to see changes

### Method 3: Online Editors
1. Go to https://replit.com/
2. Create account (free)
3. Upload your files
4. Edit and preview instantly
5. Download when done

---

## 🔍 FINDING WHAT TO EDIT

### Use "Find" Feature

**In Notepad/VS Code:**
- Press **Ctrl+F**
- Type what you're looking for
- Click through results

**Example:**
- Search for: `MD Salman` to find your name
- Search for: `Gmail.com` to find email
- Search for: `Project` to find projects section

---

## ⚠️ IMPORTANT RULES

1. **Don't change HTML structure** - Don't delete `<div>` or `<span>` tags
2. **Keep quotes balanced** - If you add a quote, close it
3. **Backup before major changes** - Copy the file first
4. **Use Ctrl+Z to undo** - If you make a mistake in editor
5. **Always save after changes** - Ctrl+S
6. **Refresh browser** - Ctrl+Shift+R (hard refresh)

---

## 🆘 IF SOMETHING BREAKS

**Don't panic!** You can always:

1. **Use Ctrl+Z** - Undo in your editor
2. **Restore from GitHub** - Your original files are there
3. **Re-download** - Download original files again
4. **Check for typos** - Review what you changed

---

## 🎓 WHAT'S IN THE CODE COMMENTS?

The code has comments explaining everything:

**In HTML:**
```html
<!-- HERO SECTION - Main banner with intro -->
<section class="hero" id="hero">
```

**In CSS:**
```css
/* Mobile responsiveness */
@media (max-width: 768px) {
```

**In JavaScript:**
```javascript
// Smooth scrolling when clicking links
function initializeSmoothScrolling() {
```

**Read these comments!** They explain what each section does.

---

## 💡 LEARNING RESOURCES

If you want to understand the code better:

- **HTML Tutorial:** https://www.w3schools.com/html/
- **CSS Tutorial:** https://www.w3schools.com/css/
- **JavaScript Tutorial:** https://www.w3schools.com/js/

---

## ✅ CHECKLIST FOR EDITS

After making changes:

- [ ] Save the file (Ctrl+S)
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Check that it looks right
- [ ] Test all links work
- [ ] Check on mobile view (zoom out or use phone)
- [ ] If error, undo (Ctrl+Z) and try again

---

**That's it! You now understand your portfolio files! 🎉**

Remember: It's okay to break things while learning. Just undo with Ctrl+Z!
