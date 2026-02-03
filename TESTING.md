# AURELIAN ESTATES - TESTING GUIDE

**Last Updated**: February 2, 2026  
**Status**: Phase 7 - Testing & Quality Assurance

---

## OVERVIEW

This guide provides step-by-step instructions for testing the Aurelian Estates website. Follow these procedures to ensure comprehensive testing coverage.

---

## QUICK START

### Prerequisites
- Chrome/Edge browser (for Lighthouse)
- Firefox browser
- Safari browser (Mac)
- Mobile device or Chrome DevTools device emulation
- axe DevTools browser extension (optional but recommended)

### Running Automated Checks

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

---

## PERFORMANCE TESTING

### Lighthouse Audit

1. **Open Chrome DevTools**
   - Press `F12` or `Right-click → Inspect`
   - Navigate to the "Lighthouse" tab

2. **Configure Audit**
   - Select categories: Performance, Accessibility, Best Practices, SEO
   - Select device: Desktop or Mobile
   - Click "Analyze page load"

3. **Review Results**
   - **Performance**: Target 95+
     - Check LCP, FID, CLS, FCP metrics
   - **Accessibility**: Target 95+
     - Review all accessibility issues
   - **Best Practices**: Target 90+
     - Check for HTTPS, console errors, etc.
   - **SEO**: Target 95+
     - Verify meta tags, structured data

4. **Document Issues**
   - Screenshot results
   - Note any scores below target
   - Document optimization opportunities

### Web Vitals Monitoring

The application includes Web Vitals tracking. Check the browser console for:
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- FID (First Input Delay)

**Expected Values:**
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

---

## ACCESSIBILITY TESTING

### Automated Testing with axe DevTools

1. **Install Extension**
   - Chrome: [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessibility/lhdoppojpmngadmnindnejefpokejbdd)
   - Firefox: [axe DevTools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

2. **Run Audit**
   - Open the website
   - Click axe DevTools icon in toolbar
   - Click "Scan ALL of my page"
   - Review violations

3. **Fix Issues**
   - Critical violations must be fixed
   - Serious violations should be fixed
   - Review warnings

### Manual Keyboard Testing

1. **Tab Navigation**
   - Press `Tab` to navigate forward
   - Press `Shift + Tab` to navigate backward
   - Verify all interactive elements are reachable
   - Check focus indicators are visible

2. **Modal Testing**
   - Open a modal
   - Press `Tab` - focus should stay within modal
   - Press `Escape` - modal should close
   - Close modal - focus should return to trigger

3. **Form Testing**
   - Navigate to form fields with `Tab`
   - Fill out form using keyboard only
   - Submit form with `Enter`
   - Verify error messages are announced

### Screen Reader Testing

#### NVDA (Windows - Free)

1. **Download and Install**
   - Visit: https://www.nvaccess.org/
   - Download and install NVDA

2. **Test Website**
   - Open website
   - Use arrow keys to navigate
   - Listen to announcements
   - Verify all content is announced
   - Test forms and modals

#### VoiceOver (Mac/iOS - Built-in)

1. **Enable VoiceOver**
   - Mac: `Cmd + F5`
   - iOS: Settings → Accessibility → VoiceOver

2. **Navigate Website**
   - Use `VO + Right Arrow` to navigate
   - Use `VO + Space` to activate
   - Listen to announcements
   - Verify all content is announced

---

## CROSS-BROWSER TESTING

### Desktop Browsers

#### Chrome
1. Open website in Chrome (latest)
2. Test all functionality
3. Check console for errors
4. Verify animations work
5. Test forms

#### Firefox
1. Open website in Firefox (latest)
2. Test all functionality
3. Check console for errors
4. Verify animations work
5. Test forms

#### Safari
1. Open website in Safari (latest)
2. Test all functionality
3. Check console for errors
4. Verify animations work
5. Test forms
6. **Note**: Safari may have different animation behavior

#### Edge
1. Open website in Edge (latest)
2. Test all functionality
3. Check console for errors
4. Verify animations work
5. Test forms

### Mobile Browsers

#### iOS Safari
1. Open website on iPhone/iPad
2. Test touch interactions
3. Verify mobile menu works
4. Test forms on mobile
5. Check for horizontal scrolling
6. Verify touch targets are adequate

#### Chrome Mobile (Android)
1. Open website on Android device
2. Test touch interactions
3. Verify mobile menu works
4. Test forms on mobile
5. Check for horizontal scrolling
6. Verify touch targets are adequate

---

## RESPONSIVE DESIGN TESTING

### Chrome DevTools Device Emulation

1. **Open DevTools**
   - Press `F12`
   - Click device toggle icon (or `Ctrl + Shift + M`)

2. **Test Breakpoints**
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1920px, 2560px

3. **Verify**
   - Layout adapts correctly
   - Text is readable
   - Touch targets are adequate
   - No horizontal scrolling
   - Images load correctly

### Real Device Testing

Test on actual devices when possible:
- iPhone (various models)
- Android phone (various models)
- iPad
- Android tablet
- Desktop monitors (various sizes)

---

## FORM TESTING

### Private Access Form

#### Test Cases

1. **Empty Form Submission**
   - Leave all fields empty
   - Click "REQUEST ACCESS"
   - Verify all error messages appear

2. **Invalid Email**
   - Enter invalid email (e.g., "test@")
   - Verify error message appears

3. **Invalid Phone**
   - Enter invalid phone (e.g., "123")
   - Verify error message appears

4. **Missing Investment Capacity**
   - Fill all fields except investment capacity
   - Verify error message appears

5. **Missing Locations**
   - Fill all fields except locations
   - Verify error message appears

6. **Valid Submission**
   - Fill all fields correctly
   - Submit form
   - Verify success toast appears
   - Verify modal closes
   - Verify form resets

### Newsletter Form

#### Test Cases

1. **Empty Email**
   - Leave email empty
   - Click "SUBSCRIBE"
   - Verify error message appears

2. **Invalid Email**
   - Enter invalid email
   - Verify error message appears

3. **Valid Submission**
   - Enter valid email
   - Submit form
   - Verify success toast appears
   - Verify form resets

---

## ANIMATION TESTING

### Reduced Motion Testing

1. **Enable Reduced Motion**
   - **Chrome/Edge**: Settings → Accessibility → Prefers reduced motion
   - **Firefox**: about:config → `ui.prefersReducedMotion` = 1
   - **Safari**: System Preferences → Accessibility → Display → Reduce motion

2. **Verify**
   - Parallax is disabled
   - Animations are minimal or instant
   - Content is still accessible
   - No motion sickness triggers

### Performance Testing

1. **Monitor Frame Rate**
   - Open Chrome DevTools
   - Go to Performance tab
   - Record page interaction
   - Verify 60fps maintained

2. **Check for Jank**
   - Scroll page
   - Interact with elements
   - Verify smooth animations
   - No stuttering or lag

---

## ERROR HANDLING TESTING

### Error Boundary Testing

1. **Simulate Error** (Development only)
   - Add temporary error in component
   - Verify error boundary catches it
   - Verify user-friendly error message
   - Test "Try Again" button
   - Test "Go Home" button

2. **Image Loading Errors**
   - Break image URLs
   - Verify fallback gradient appears
   - No broken image icons

### Network Error Testing

1. **Throttle Network**
   - Chrome DevTools → Network tab
   - Set to "Slow 3G"
   - Verify graceful loading
   - Verify skeleton loaders appear

2. **Offline Testing**
   - Go offline
   - Verify graceful error handling
   - Verify user-friendly messages

---

## ANALYTICS TESTING

### Event Tracking

1. **Open Browser Console**
   - Press `F12`
   - Go to Console tab

2. **Test Events**
   - Click CTAs - verify `CTA_CLICK` logs
   - Submit forms - verify `FORM_SUBMIT` logs
   - Scroll page - verify `SCROLL_DEPTH` logs
   - View properties - verify property logs

---

## SECURITY TESTING

### Form Security

1. **XSS Testing**
   - Enter script tags in forms
   - Verify they are escaped
   - Verify no script execution

2. **Input Validation**
   - Test various input types
   - Verify validation works
   - Verify error messages

---

## FINAL CHECKLIST

Before marking testing complete:

- [ ] All automated tests pass
- [ ] Lighthouse scores meet targets
- [ ] Accessibility audit passes
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] Forms tested thoroughly
- [ ] Animations tested
- [ ] Error handling verified
- [ ] Performance verified
- [ ] Documentation updated

---

## REPORTING ISSUES

When reporting issues, include:
1. **Browser and Version**: e.g., Chrome 120
2. **Device/Resolution**: e.g., Desktop 1920x1080
3. **Steps to Reproduce**: Detailed steps
4. **Expected Behavior**: What should happen
5. **Actual Behavior**: What actually happens
6. **Screenshots**: If applicable
7. **Console Errors**: Any error messages

---

## TESTING TOOLS

### Recommended Tools
- **Lighthouse**: Built into Chrome DevTools
- **axe DevTools**: Browser extension
- **WAVE**: Web accessibility evaluation
- **Chrome DevTools**: Performance, Network, Console
- **BrowserStack**: Cross-browser testing (paid)
- **Responsive Design Mode**: Built into browsers

### Free Resources
- Chrome DevTools (free)
- Firefox DevTools (free)
- Safari Web Inspector (free)
- axe DevTools extension (free)
- WAVE extension (free)

---

**Version**: 1.0  
**Last Updated**: February 2, 2026
  
## TESTING CHECKLIST  
# AURELIAN ESTATES - TESTING CHECKLIST

**Last Updated**: February 2, 2026  
**Status**: Phase 7 - Testing & Quality Assurance

---

## OVERVIEW

This document provides a comprehensive testing checklist for the Aurelian Estates website. Use this checklist to ensure all functionality, performance, and accessibility requirements are met before deployment.

---

## CROSS-BROWSER TESTING

### Desktop Browsers

#### Chrome (Latest)
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Property cards display and are clickable
- [ ] Property modal opens and closes
- [ ] Private Access form submits correctly
- [ ] Newsletter form submits correctly
- [ ] All animations work smoothly
- [ ] Images load correctly
- [ ] No console errors

#### Firefox (Latest)
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Property cards display and are clickable
- [ ] Property modal opens and closes
- [ ] Private Access form submits correctly
- [ ] Newsletter form submits correctly
- [ ] All animations work smoothly
- [ ] Images load correctly
- [ ] No console errors

#### Safari (Latest)
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Property cards display and are clickable
- [ ] Property modal opens and closes
- [ ] Private Access form submits correctly
- [ ] Newsletter form submits correctly
- [ ] All animations work smoothly
- [ ] Images load correctly
- [ ] No console errors

#### Edge (Latest)
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Property cards display and are clickable
- [ ] Property modal opens and closes
- [ ] Private Access form submits correctly
- [ ] Newsletter form submits correctly
- [ ] All animations work smoothly
- [ ] Images load correctly
- [ ] No console errors

### Mobile Browsers

#### iOS Safari
- [ ] Homepage loads correctly
- [ ] Mobile menu opens and closes
- [ ] Touch targets are large enough (44x44px)
- [ ] Property cards are tappable
- [ ] Forms are usable on mobile
- [ ] Images load correctly
- [ ] No horizontal scrolling
- [ ] No console errors

#### Chrome Mobile (Android)
- [ ] Homepage loads correctly
- [ ] Mobile menu opens and closes
- [ ] Touch targets are large enough (44x44px)
- [ ] Property cards are tappable
- [ ] Forms are usable on mobile
- [ ] Images load correctly
- [ ] No horizontal scrolling
- [ ] No console errors

---

## DEVICE TESTING

### Desktop Resolutions

#### 1920x1080 (Full HD)
- [ ] Layout displays correctly
- [ ] Property grid shows 3 columns
- [ ] All sections are visible
- [ ] Navigation is sticky
- [ ] No layout issues

#### 2560x1440 (2K)
- [ ] Layout displays correctly
- [ ] Content is centered (max-width working)
- [ ] Property grid shows 3 columns
- [ ] No excessive whitespace
- [ ] No layout issues

#### 1366x768 (Laptop)
- [ ] Layout displays correctly
- [ ] Property grid shows 2 columns
- [ ] All sections are visible
- [ ] No horizontal scrolling
- [ ] No layout issues

### Tablet Resolutions

#### 768x1024 (iPad Portrait)
- [ ] Layout displays correctly
- [ ] Property grid shows 2 columns
- [ ] Navigation menu works
- [ ] Forms are usable
- [ ] Touch targets are adequate
- [ ] No layout issues

#### 1024x768 (iPad Landscape)
- [ ] Layout displays correctly
- [ ] Property grid shows 2-3 columns
- [ ] Navigation menu works
- [ ] Forms are usable
- [ ] Touch targets are adequate
- [ ] No layout issues

### Mobile Resolutions

#### 375x667 (iPhone SE / iPhone 8)
- [ ] Layout displays correctly
- [ ] Property grid shows 1 column
- [ ] Mobile menu works
- [ ] Forms are usable
- [ ] Touch targets are 44x44px minimum
- [ ] No horizontal scrolling
- [ ] Text is readable

#### 414x896 (iPhone 11 Pro Max)
- [ ] Layout displays correctly
- [ ] Property grid shows 1 column
- [ ] Mobile menu works
- [ ] Forms are usable
- [ ] Touch targets are 44x44px minimum
- [ ] No horizontal scrolling
- [ ] Text is readable

#### 360x640 (Android Small)
- [ ] Layout displays correctly
- [ ] Property grid shows 1 column
- [ ] Mobile menu works
- [ ] Forms are usable
- [ ] Touch targets are 44x44px minimum
- [ ] No horizontal scrolling
- [ ] Text is readable

---

## PERFORMANCE TESTING

### Lighthouse Audit

Run Lighthouse audit in Chrome DevTools (F12 → Lighthouse tab)

#### Performance Score
- [ ] Score: 95+ (Target)
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Total Blocking Time (TBT): < 200ms
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Speed Index: < 3.4s

#### Accessibility Score
- [ ] Score: 95+ (Target)
- [ ] All images have alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels are correct
- [ ] No accessibility violations

#### Best Practices Score
- [ ] Score: 90+ (Target)
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] No deprecated APIs
- [ ] Images have proper aspect ratios

#### SEO Score
- [ ] Score: 95+ (Target)
- [ ] Meta tags present
- [ ] Structured data present
- [ ] Sitemap configured
- [ ] Robots.txt configured

### Network Testing

#### Slow 3G Connection
- [ ] Page loads within 10 seconds
- [ ] Images load progressively
- [ ] Skeleton loaders appear
- [ ] No layout shift during loading
- [ ] User can interact while loading

#### Fast 3G Connection
- [ ] Page loads within 5 seconds
- [ ] Images load quickly
- [ ] Smooth animations
- [ ] No jank or stutter

### Low-End Device Testing

Test on a low-end device or use Chrome DevTools CPU throttling:
- [ ] Page loads within acceptable time
- [ ] Animations run at 60fps
- [ ] No jank or stutter
- [ ] Interactions are responsive
- [ ] Forms are usable

---

## ACCESSIBILITY TESTING

### Automated Testing

#### axe DevTools
1. Install axe DevTools browser extension
2. Run audit on homepage
- [ ] No critical violations
- [ ] No serious violations
- [ ] All warnings reviewed
- [ ] All issues fixed

#### WAVE (Web Accessibility Evaluation Tool)
1. Use WAVE browser extension or online tool
- [ ] No errors
- [ ] No contrast errors
- [ ] All images have alt text
- [ ] Proper heading structure

### Manual Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Skip-to-content link works
- [ ] Focus indicators are visible
- [ ] Modals trap focus
- [ ] Escape key closes modals
- [ ] Enter/Space activates buttons
- [ ] Arrow keys work in forms

#### Screen Reader Testing

**NVDA (Windows)**
- [ ] All content is announced
- [ ] Images have descriptive alt text
- [ ] Forms are navigable
- [ ] Buttons have clear labels
- [ ] Modals are announced
- [ ] Error messages are announced

**VoiceOver (Mac/iOS)**
- [ ] All content is announced
- [ ] Images have descriptive alt text
- [ ] Forms are navigable
- [ ] Buttons have clear labels
- [ ] Modals are announced
- [ ] Error messages are announced

#### Color Contrast
- [ ] Body text: 4.5:1 ratio (WCAG AA)
- [ ] Large text: 3:1 ratio (WCAG AA)
- [ ] Gold (#C5A059) on black: 11.8:1 ✓
- [ ] Focus indicators: Visible
- [ ] Error messages: High contrast

#### Touch Targets
- [ ] All buttons: Minimum 44x44px
- [ ] Adequate spacing between elements (8px+)
- [ ] No overlapping touch targets
- [ ] Forms are usable on mobile

---

## FORM TESTING

### Private Access Form

#### Validation Testing
- [ ] Empty name field shows error
- [ ] Invalid email shows error
- [ ] Empty phone shows error
- [ ] Invalid phone format shows error
- [ ] No investment capacity selected shows error
- [ ] No locations selected shows error
- [ ] All fields valid allows submission

#### Submission Testing
- [ ] Form submits successfully
- [ ] Success toast appears
- [ ] Modal closes after submission
- [ ] Form data is logged to console
- [ ] Form resets after submission

#### Error States
- [ ] Error messages are visible
- [ ] Error messages are accessible (ARIA)
- [ ] Error messages are clear
- [ ] Fields highlight on error
- [ ] Errors clear on correction

### Newsletter Form

#### Validation Testing
- [ ] Empty email shows error
- [ ] Invalid email format shows error
- [ ] Valid email allows submission

#### Submission Testing
- [ ] Form submits successfully
- [ ] Success toast appears
- [ ] Form resets after submission
- [ ] Form data is logged to console

---

## ANIMATION TESTING

### Reduced Motion
- [ ] Enable `prefers-reduced-motion` in browser
- [ ] Parallax is disabled
- [ ] Animations are instant or minimal
- [ ] No motion sickness triggers
- [ ] Content is still accessible

### Performance
- [ ] All animations run at 60fps
- [ ] No jank or stutter
- [ ] Smooth transitions
- [ ] No layout shift during animations
- [ ] Animations don't block interactions

### Functionality
- [ ] Animations don't break functionality
- [ ] Content is visible during animations
- [ ] Animations complete properly
- [ ] No animation glitches

---

## FUNCTIONALITY TESTING

### Navigation
- [ ] Logo links to homepage
- [ ] Navigation links scroll to sections
- [ ] Mobile menu opens/closes
- [ ] Mobile menu links work
- [ ] Sticky navigation works on scroll
- [ ] INQUIRE button opens modal

### Property Grid
- [ ] All properties display
- [ ] Property cards are clickable
- [ ] Property modal opens
- [ ] Property modal displays correct info
- [ ] Property modal closes
- [ ] "Request Private Viewing" button works
- [ ] Images load correctly
- [ ] Skeleton loaders appear during loading

### Modals
- [ ] Property modal opens/closes
- [ ] Private Access modal opens/closes
- [ ] Escape key closes modals
- [ ] Click outside closes modals
- [ ] Focus is trapped in modals
- [ ] Focus returns after close
- [ ] Modals are accessible

### Sections
- [ ] Hero section displays
- [ ] Property grid displays
- [ ] Objection grid displays
- [ ] FAQ accordion works
- [ ] CTA section displays
- [ ] Newsletter section displays
- [ ] Footer displays

---

## ERROR HANDLING TESTING

### Error Boundary
- [ ] Error boundary catches React errors
- [ ] Error message is user-friendly
- [ ] "Try Again" button works
- [ ] "Go Home" button works
- [ ] Error details shown in development
- [ ] No error details in production

### Image Loading
- [ ] Images load correctly
- [ ] Fallback gradient appears on error
- [ ] No broken image icons
- [ ] Skeleton loaders appear during loading

### Network Errors
- [ ] Graceful handling of network failures
- [ ] User-friendly error messages
- [ ] Retry options available

---

## ANALYTICS TESTING

### Event Tracking
- [ ] CTA clicks are logged
- [ ] Form submissions are logged
- [ ] Scroll depth is tracked
- [ ] Property views are tracked
- [ ] Console logs are present (for prototype)

---

## SECURITY TESTING

### Form Security
- [ ] Forms validate input
- [ ] XSS prevention (React handles this)
- [ ] No sensitive data in console (production)
- [ ] HTTPS enabled (production)

---

## FINAL CHECKS

### Code Quality
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console errors (production)
- [ ] No console warnings
- [ ] Code is formatted consistently

### Documentation
- [ ] README is up to date
- [ ] Testing checklist completed
- [ ] Known issues documented
- [ ] Deployment instructions clear

### Pre-Deployment
- [ ] Build succeeds (`npm run build`)
- [ ] Production build tested locally
- [ ] Environment variables set
- [ ] Analytics configured
- [ ] Error tracking configured (if applicable)

---

## TESTING NOTES

### Known Issues
Document any known issues or limitations here:

1. 
2. 
3. 

### Browser-Specific Notes
Document any browser-specific behavior:

1. 
2. 
3. 

### Performance Notes
Document performance observations:

1. 
2. 
3. 

---

## SIGN-OFF

**Tester Name**: _________________  
**Date**: _________________  
**Status**: ☐ Pass  ☐ Fail  ☐ Needs Review  
**Notes**: 

---

**Version**: 1.0  
**Last Updated**: February 2, 2026
