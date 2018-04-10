/*eslint-disable object-shorthand*/

import prismLight from './prism.light';
import prismDark from './prism.dark';

const atenColors = {
  black: '#363136',
  gold: '#F9CD33',
  red: '#ff0000',
  gray: '#777277',
  white: 'white',
  grayDark: '#3B393C',
};

const defaultColors = {
  ...atenColors,
  primary: atenColors.white,
  secondary: atenColors.black,
  tertiary: atenColors.gray,
  quarternary: atenColors.red,
};

const defaultFonts = {
  primary: 'Roboto',
  secondary: 'Lobster Two',
  tertiary: 'monospace',
};

const fs = {
  h1: '16rem',
  h2: '8.5rem',
  h3: '7.35rem',
  h4: '5.5rem',
  h5: '3.82rem'
};

const fw = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  black: 900,
};

const screen = (colorArgs = defaultColors, fontArgs = defaultFonts) => {
  const colors = Object.assign({}, defaultColors, colorArgs);
  let normalizedFontArgs = {};
  let googleFonts = {};

  Object.keys(fontArgs).forEach(key => {
    const value = fontArgs[key];
    const fontName = value.hasOwnProperty('name') ? value.name : value;
    normalizedFontArgs = { ...normalizedFontArgs, [key]: fontName };
    if (value.hasOwnProperty('googleFont') && value.googleFont) {
      googleFonts = { ...googleFonts, [key]: value };
    }
  });

  const fonts = Object.assign({}, defaultFonts, normalizedFontArgs);

  return {
    colors: colors,
    fonts: fonts,
    googleFonts,
    global: {
      body: {
        background: colors.primary,
        fontFamily: fonts.primary,
        fontWeight: fw.regular,
        fontSize: '2em',
        color: colors.gray,
        overflow: 'hidden',
        textAlign: 'left',
      },
      '_:-moz-tree-row(hover), .spectacle-deck': {
        perspective: '1000px'
      },
      '_:-moz-tree-row(hover), ul .appear': {
        display: 'inline'
     },
      'html': {
        fontSize: "calc((16 / 1920) * 100vw) !important"
      },
      'html, body': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0
      },
      '*': {
        boxSizing: 'border-box',
      },
      '.grid': {
        display: 'grid',
        gridTemplateColumns: `[left-bleed] ${240 / 1920 * 100}vw [left-margin] 1fr [left-inner-margin] ${120 / 1920 * 100}vw [center] ${120 / 1920 * 100}vw [right-inner-margin] 1fr [right-margin] ${240 / 1920 * 100}vw [right-bleed]`,
        gridTemplateRows: `[top-bleed] ${78 / 1200 * 100}vh [top-margin] 1fr [bottom-margin] ${140 / 1200 * 100}vh [bottom-bleed]`,
        padding: 0,
        height: '100vh',
        width: '100vw',
      },
      '.grid--2-column': {
        gridTemplateColumns: `[left-bleed] ${120 / 1920 * 100}vw [left-margin] 1fr [left-inner-margin] ${120 / 1920 * 100}vw [center] ${120 / 1920 * 100}vw [right-inner-margin] 1fr [right-margin] ${120 / 1920 * 100}vw [right-bleed]`,
        gridTemplateRows: `[top-bleed] ${78 / 1200 * 100}vh [top-margin] 1fr [bottom-margin] ${140 / 1200 * 100}vh [bottom-bleed]`,
      },
      '.grid--2-column .grid__column:first-child': {
        gridArea: 'top-bleed / left-bleed / bottom-bleed / center',
        height: '100vh',
      },
      '.grid--2-column .slide-title': {
        gridArea: 'top-margin / left-margin / bottom-bleed / left-inner-margin',
      },
      '.grid--2-column .slide-content': {
        gridArea: 'top-margin / right-inner-margin / bottom-margin / right-margin',
        display: 'flex',
        alignItems: 'center',
      },
      '.grid--2-column .grid__column:last-child': {
        gridArea: 'top-bleed / center / bottom-bleed / right-bleed',
        height: '100vh',
      },
      '.grid__screenshot': {
        gridArea: 'top-margin / left-margin / bottom-bleed / right-margin',
      },
      '.grid__default': {
        gridArea: 'top-margin / left-margin / bottom-margin / right-margin',
      },
      '.grid__cover': {
        gridArea: 'top-bleed / left-bleed / bottom-bleed / right-bleed',
        height: '100vh',
        width: '100vw',
      },
      '.center': {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      },
      '.left-align': {
        alignItems: 'flex-start',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: "100%"
      },
      '.overlay': {
        backgroundColor: 'rgba(255, 255, 255, .8)',
      },
      '.gold': {
        backgroundColor: colors.gold,
      }
    },
    fullscreen: {
      fill: colors.gold,
    },
    autoplay: {
      pause: {
        position: 'absolute',
        top: 20,
        right: '50%',
        left: '50%',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0,
      },
      pauseIcon: {
        fill: colors.tertiary,
      },
      play: {
        position: 'absolute',
        top: 20,
        right: '50%',
        left: '50%',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0,
      },
      playIcon: {
        fill: colors.tertiary,
      },
    },
    controls: {
      prev: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0,
      },
      prevIcon: {
        fill: colors.tertiary,
        transition: 'fill 1s ease-in-out 0.2s',
      },
      next: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0,
      },
      nextIcon: {
        fill: colors.tertiary,
        transition: 'fill 1s ease-in-out 0.2s',
      },
    },
    prism: {
      light: prismLight,
      dark: prismDark,
    },
    progress: {
      pacman: {
        container: {
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000,
        },
        pacman: {
          position: 'absolute',
          transition: 'left 0.3s ease-in-out 0.2s',
          width: '20px',
          height: '20px',
          transform: 'translate(-5px, -5px)',
        },
        pacmanTop: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          transition: 'all 0.3s ease-out',
          background: colors.tertiary,
        },
        pacmanBottom: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          background: colors.tertiary,
          transition: 'all 0.3s ease-out',
          top: '10px',
        },
        point: {
          position: 'absolute',
          float: 'left',
          background: 'transparent',
          width: '10px',
          height: '10px',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: colors.tertiary,
          borderRadius: '50%',
          transition: 'all 0.3s ease-out',
        },
      },
      bar: {
        container: {
          position: 'absolute',
          height: '10px',
          width: '100%',
          bottom: 0,
          left: 0,
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000,
        },
        bar: {
          height: '100%',
          background: colors.tertiary,
          transition: 'all 0.3s ease-out',
        },
      },
      number: {
        container: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.tertiary,
          transition: 'all 0.3s ease-out',
        },
      },
    },
    components: {
      blockquote: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-block',
        margin: 20,
      },
      quote: {
        borderLeft: `1px solid ${colors.primary}`,
        paddingLeft: 40,
        display: 'block',
        color: colors.primary,
        fontSize: '4.9rem',
        lineHeight: 1,
        fontWeight: fw.black,
      },
      cite: {
        color: colors.gray,
        display: 'block',
        clear: 'left',
        fontSize: '2rem',
        marginTop: '1rem',
      },
      content: {
        margin: '0 auto',
        textAlign: 'left',
      },
      codePane: {
        margin: 'auto',
        fontSize: '0.8rem',
        fontWeight: fw.regular,
        minWidth: '100%',
        maxWidth: 800,
      },
      syntax: {
        fontFamily: fonts.tertiary,
        fontSize: 'inherit',
        lineHeight: 1.5,
        direction: 'ltr',
        textAlign: 'left',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        tabSize: 2,
        hyphens: 'none',
        whiteSpace: 'pre-wrap',
        padding: '0.5rem',
        margin: 0,
      },
      code: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.tertiary,
        margin: '0.25rem auto',
        backgroundColor: 'rgba(0,0,0,0.15)',
        padding: '0 10px',
        borderRadius: 3,
      },
      goToAction: {
        borderRadius: '6px',
        fontFamily: fonts.primary,
        padding: '0.25em 1em',
        border: 'none',
        background: '#000',
        color: '#fff',
        '&:hover': {
          background: colors.tertiary,
          color: '#000'
        }
      },
      heading: {
        h1: {
          color: colors.secondary,
          fontSize: fs.h1,
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: 0,
          zoom: 1,
        },
        h2: {
          color: colors.secondary,
          fontSize: fs.h2,
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: 0,
        },
        h3: {
          color: colors.secondary,
          fontSize: fs.h3,
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: '0.5rem auto',
        },
        h4: {
          color: colors.secondary,
          fontSize: fs.h4,
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: '0.5rem auto',
        },
        h5: {
          color: colors.secondary,
          fontSize: '3.19rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: '0.5rem auto',
        },
        h6: {
          color: colors.secondary,
          fontSize: '2.66rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: fw.black,
          margin: '0.5rem auto',
        },
      },
      image: {
        display: 'block',
        margin: '0.5rem auto',
      },
      link: {
        textDecoration: 'none',
        color: colors.secondary,
      },
      listItem: {
        fontSize: '2.66rem',
      },
      list: {
        textAlign: 'left',
        listStylePosition: 'inside',
        padding: 0,
      },
      s: {
        strikethrough: {},
      },
      tableHeaderItem: {
        fontSize: '2.66rem',
        fontWeight: fw.black,
      },
      tableItem: {
        fontSize: '2.66rem',
      },
      table: {
        width: '100%',
      },
      text: {
        color: colors.gray,
        fontSize: '4rem',
        fontFamily: fonts.primary,
        margin: '0.25rem auto',
      },
    },
  };
};

export default screen;
