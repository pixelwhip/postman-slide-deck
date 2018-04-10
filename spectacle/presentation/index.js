// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  S,
  Text
} from "spectacle";

import preloader from "spectacle/src/utils/preloader";

require("normalize.css");

const speaker = {
  name: 'John Ferris',
  email: 'john@aten.io',
  title: 'Director of Front-End Engineering',
  twitter: 'pixel_whip',
  drupal: 'pixelwhip',
}

const images = {
  aten: require("../assets/aten.svg"),
  clients: require("../assets/aten-clients.png"),
  john: require("../assets/john-ferris.png"),
  contenta: {
    logo: require("../assets/contenta-cms.png"),
    screenshots: [
      require("../assets/contenta-screenshot-1.png"),
    ],
  },
  jsonapi: require("../assets/jsonapi.png"),
  postman: {
    logo: require("../assets/postman.png"),
    screenshots: [
      require("../assets/pm-screenshot-1.png"),
      require("../assets/pm-screenshot-2.png"),
      require("../assets/pm-screenshot-3.png"),
      require("../assets/pm-screenshot-scripts.png"),
    ],
  },
  oauth: require("../assets/Oauth_logo.svg"),
  stripe: require("../assets/modjs_Stripe.svg"),
  diaganol: require("../assets/modjs_Diaganol.svg"),
  diaganolSingle: require("../assets/modjs_Diaganol-Single.svg"),
  diaganolGold: require("../assets/modjs_Diaganol-Gold.svg"),
  scripts1: require("../assets/scripts-1.svg"),
  scripts2: require("../assets/scripts-2.svg"),
  variables: require("../assets/scripts-3-fit.svg"),
  request: require("../assets/anatomy-of-a-request.png"),
  newman: require("../assets/newman.png"),
  newmanCli: require("../assets/newman-terminal.gif"),
  status: {
    200: require("../assets/status-200.svg"),
    201: require("../assets/status-201.svg"),
    301: require("../assets/status-301.svg"),
    403: require("../assets/status-403.svg"),
    404: require("../assets/status-404.svg"),
    418: require("../assets/teapot.svg")
  },
};

const statusCodes = [
  { code: 1, status: "Hold on" },
  { code: 2, status: "Here you go" },
  { code: 3, status: "Go away" },
  { code: 4, status: "You screwed up" },
  { code: 5, status: "I screwed up" }
];

preloader(images);

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import createTheme from "./../themes/aten";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    none: "transparent"
  },
  {
    primary: "Roboto",
    secondary: "Roboto"
  }
);

const stripeProps = {
  bgImage: images.stripe,
  bgSize: "100%",
  bgPosition: "top left"
};

const diaganolProps = (image = "diaganol") => ({
  bgImage: images[image],
  bgSize: "cover",
  bgPosition: "top left"
});

const gridProps = (modifier) => ({
  height: window.innerHeight,
  width: window.innerWidth,
  className: modifier ? `grid grid--${modifier}` : 'grid'
});

class Contact extends React.PureComponent {

  render() {
    const { profile } = this.props;

    return (
      <div className="contact">
        <Text bold className="contact__name">{profile.name}</Text>
        <Link className="contact__email"href={`mailto:${profile.email}`}>{profile.email}</Link>
      </div>
    );
  }
}

class Speaker extends React.PureComponent {

  render() {
    const { profile } = this.props;

    return (
      <div className="speaker">
        <Image className="speaker_logo" src={images.aten} display={'inline-block'} height={"10rem"} width={"10rem"} />
        <Heading size={2} className="speaker__name">{profile.name}</Heading>
        <Text className="speaker__title">{profile.title}</Text>
        <Link className="speaker__twitter" href={`https://twitter.com/${profile.twitter}`}>{`@${profile.twitter}`}</Link>
      </div>
    );
  }
}

const screenshotProps = (modifier) => ({
  bgColor: "black",
  // width: window.innerWidth,
  // className: modifier ? `grid grid--${modifier}` : 'grid'
});

class ScreenshotSlide extends React.PureComponent {

  render() {
    const { src, label } = this.props;

    return (
      <div className="grid__screenshot screenshot">
        <Image className="screenshot_logo" src={src} />
        { label && (<div className="screenshot_label"><Text teaxtColor="gray" bgColor="" >{label}</Text></div>)}
      </div>
    );
  }
}

const statusProps = {
  bgColor: "primary",
  textColor: "tertiary",
  ...gridProps(),
  ...stripeProps
};

class StatusSlide extends React.PureComponent {

  render() {
    const { code } = this.props;

    return (
      <div className={'grid__default left-align'}>
        <Image src={images.status[code]} />
      </div>
    );
  }
}

const demoProps = {
  bgColor: 'red',
  textAlign: "center",
  ...gridProps(),
}

class DemoSlide extends React.PureComponent {

  render() {
    return (
      <div className="grid__cover center">
        <Heading size={1} caps textColor={'white'} textAlign={"center"}>
          Stop!
        </Heading>
        <Heading size={2} caps textColor={'white'} textAlign={"center"}>
          Demo Time
        </Heading>
      </div>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        contentHeight={window.innerHeight}
        contentWidth={window.innerWidth}
      >
        <Slide
          {...diaganolProps("diaganolSingle")}
          bgColor="none"
          align="flex-start center"
          {...gridProps()}
        >
          <div className={'grid__default left-align'}>
            <Heading size={2} lineHeight={1} textColor="secondary" margin="0 0 10rem">
              Building Confidence in APIs with Postman
            </Heading>
            <Image src={images.aten} height={"12rem"} width={"12rem"} display={"inline-block"} margin="0" style={{maxHeight: 'none'}} />
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")} {...gridProps()}>
          <div className="grid__default left-align">
            <Speaker profile={speaker} />
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.aten} height={"33rem"} width={"20rem"} margin={"0 auto 5rem"} />
          <Text textAlign="center">
            <Link href="https://twitter.com/atendesign" margin={"0 2rem"}>@atendesign</Link> /
            <Link href="https://aten.io" margin={"0 2rem"}>aten.io</Link>
          </Text>
        </Slide>
        <Slide
          {...diaganolProps("diaganolSingle")}
          bgImage={images.clients.replace("/", "")}
          bgPosition={"center"}
          textAlign={"center"}
          {...gridProps()}
        >
          <Appear>
            <div className="grid__cover center overlay">
              <Heading size={2} caps textAlign={"center"}>
                A Brighter
              </Heading>
              <Heading size={2} caps textColor={"gold"} textAlign={"center"}>
                Tomorrow
              </Heading>
            </div>
          </Appear>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.postman.logo.replace("/", "")} />
        </Slide>
        <Slide {...screenshotProps()}>
          <ScreenshotSlide src={images.postman.screenshots[2].replace("/", "")} />
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.contenta.logo.replace("/", "")} />
        </Slide>
        <Slide {...screenshotProps()}>
          <ScreenshotSlide src={images.contenta.screenshots[0].replace("/", "")} />
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")} style={{textAlign: "center"}}>
          <Image src={images.jsonapi.replace("/", "")} margin="0 auto 5rem"/>
            <Link href="http://jsonapi.org/format/" style={{textAlign: "center"}} margin="0 auto 2rem"><Heading size={5} textColor="gray">Read the <S type="underline">spec!</S></Heading></Link>
            <Link href="https://www.drupal.org/docs/8/modules/json-api" style={{textAlign: "center"}} margin="2rem auto"><Heading size={5} textColor="gray">...then read the <S type="underline">module docs.</S></Heading></Link>
          <Appear order={2}>
            <Heading size={5} style={{textAlign: "center"}} margin="2rem auto">...Seriously. Read them for real.</Heading>
          </Appear>
        </Slide>
        <Slide {...diaganolProps("diaganolGold")} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={1} textColor="primary">APIs</Heading>
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")} {...gridProps()}>
          <div className="grid__cover center">
            <Image src={images.request.replace("/", "")} />
            <Link href="https://www.getpostman.com/docs/v6/postman/launching_postman/sending_the_first_request">getpostman.com</Link>
          </div>
        </Slide>
        <Slide {...stripeProps} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={5} textColor="tertiary" margin={'0 0 2em 0'}>
              HTTP Status Ranges in a Nutshell
            </Heading>
              {statusCodes.map((i) => (
                <Heading size={4} key={i.code} margin={'0 0 .625em 0'}>
                  <strong>{i.code}</strong><span style={{color: "#999", fontWeight: 400}}>xx:</span> <strong>{i.status}</strong>
                </Heading>
              ))}
            <Link href="https://twitter.com/stevelosh/status/372740571749572610?lang=en">
              <Text>Credit: @stevelosh</Text>
            </Link>
          </div>
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={200} />
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={201} />
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={301} />
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={403} />
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={404} />
        </Slide>
        <Slide {...statusProps}>
          <StatusSlide code={418} />
        </Slide>
        <Slide {...demoProps} >
          <DemoSlide />
        </Slide>
        <Slide {...diaganolProps("diaganolGold")} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={1} textColor="primary">Variables</Heading>
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")} {...gridProps()}>
          <div className={'grid__default'} style={{justifyContent: 'center'}}>
            <div style={{height: "100%", display: "flex", alignItems: "center"}}>
              <Code theme="light" textSize="4vw" bgColor={"transparent"}>{"https://"}</Code><Code textSize="4vw" bgColor={"transparent"} textColor="red">{"{{domain}}"}</Code><Code textSize="4vw" theme="light" bgColor={"transparent"}>{"/api/recipes"}</Code>
            </div>
          </div>
        </Slide>
        <Slide {...gridProps('2-column')}>
          <div className={'grid__column gold'}>
          </div>
          <Heading size={2} textColor="primary" className="slide-title left-align" margin={"0 0 1em 0"}>Scopes</Heading>
          <div className={'slide-content'}>
            <Image src={images.variables} margin={"auto"} width={"100%"}/>
          </div>
        </Slide>
        <Slide {...demoProps} >
          <DemoSlide />
        </Slide>
        <Slide {...diaganolProps("diaganolGold")} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={1} textColor="primary">Scripts</Heading>
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganol")}>
          <Image src={images.scripts1} />
        </Slide>
        <Slide {...diaganolProps("diaganol")}>
          <Image src={images.scripts2} />
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.postman.screenshots[3].replace("/", "")} />
        </Slide>
        <Slide {...demoProps} >
          <DemoSlide />
        </Slide>
        <Slide {...diaganolProps("diaganolGold")} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={1} textColor="primary">Newman</Heading>
          </div>
        </Slide>
        <Slide bgImage={images.newman.replace("/", "")} />
        <Slide {...diaganolProps("diaganolSingle")} {...gridProps()}>
          <div className={'grid__default'} style={{justifyContent: 'center'}}>
            <div style={{height: "100%", display: "flex", alignItems: "center"}}>
              <Code theme="light" textSize="4vw" bgColor={"transparent"}>{"npm install newman -g"}</Code>
            </div>
          </div>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image width="80vw" src={images.newmanCli.replace("/", "")} />
        </Slide>
        <Slide {...diaganolProps("diaganol")} {...gridProps()}>
          <div className={'grid__default left-align'}>
            <Heading size={1} margin="0">Thanks!</Heading>
            <Heading size={1} margin="0 0 6rem" textColor="gold">We're Hiring</Heading>
            <Contact profile={speaker} />
          </div>
        </Slide>
      </Deck>
    );
  }
}
