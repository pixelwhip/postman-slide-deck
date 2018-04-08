// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import preloader from "spectacle/src/utils/preloader";

require("normalize.css");

const images = {
  aten: require("../assets/aten.svg"),
  clients: require("../assets/aten-clients.png"),
  john: require("../assets/john-ferris.png"),
  contenta: require("../assets/contenta-cms.png"),
  jsonapi: require("../assets/jsonapi.png"),
  postman: require("../assets/postman.png"),
  oauth: require("../assets/Oauth_logo.svg"),
  stripe: require("../assets/modjs_Stripe.svg"),
  diaganol: require("../assets/modjs_Diaganol.svg"),
  diaganolSingle: require("../assets/modjs_Diaganol-Single.svg"),
  diaganolGold: require("../assets/modjs_Diaganol-Gold.svg")
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        contentHeight={window.innerHeight * 0.8}
        contentWidth={window.innerWidth * 0.8}
      >
        <Slide
          {...diaganolProps("diaganolSingle")}
          bgColor="none"
          align="flex-start center"
        >
          <Heading size={1} lineHeight={1} textColor="secondary">
            Building Confidence in APIs with Postman
          </Heading>
          <Text margin="10px 0 0" size={1}>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide {...diaganolProps("diaganol")}>
          <Image src={images.aten} height={"30rem"} width={"20rem"} />
          <Text textAlign="center">
              <h1 className="speaker__name">John Ferris</h1>
              <span className="speaker__title">
                Director of Front-end Engineering
              </span>
              <a href="http://twitter.com/pixel_whip" className="speaker__twitter">
                @pixel_whip
              </a>
          </Text>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.aten} height={"30rem"} width={"20rem"} />
          <Text textAlign="center">
            <Link href="https://twitter.com/atendesign">@atendesign</Link> /
            <Link href="https://aten.io">aten.io</Link>
          </Text>
        </Slide>
        <Slide
          {...diaganolProps("diaganolSingle")}
          bgImage={images.clients.replace("/", "")}
          bgPosition={"center"}
          textAlign={"center"}
        >
          <Appear>
            <div>
              <Heading size={1} caps textAlign={"center"}>
                A Brighter
              </Heading>
              <Heading size={1} caps textColor={"gold"} textAlign={"center"}>
                Tomorrow
              </Heading>
            </div>
          </Appear>
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.postman.replace("/", "")} />
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.contenta.replace("/", "")} />
        </Slide>
        <Slide {...diaganolProps("diaganolSingle")}>
          <Image src={images.jsonapi.replace("/", "")} />
        </Slide>
        <Slide bgColor="gold">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1}>Heading 1</Heading>
          <Heading size={2}>Heading 2</Heading>
          <Heading size={3}>Heading 3</Heading>
          <Heading size={4}>Heading 4</Heading>
          <Heading size={5}>Heading 5</Heading>
          <Text size={6}>Standard text</Text>
        </Slide>

        <Slide {...stripeProps}>
          <Heading size={3} textColor="secondary">
            HTTP Status Ranges in a Nutshell
          </Heading>
          <List>
            {statusCodes.map((i) => (
              <ListItem key={i.code}>
                <span>
                  <strong>{i.code}</strong>xx: <strong>{i.status}</strong>
                </span>
              </ListItem>
            ))}
          </List>
          <Link href="https://twitter.com/stevelosh/status/372740571749572610?lang=en">
            <Text>Credit: @stevelosh</Text>
          </Link>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={1}>418</Heading>
          <Heading size={3}>I'm a Teapot</Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              {
                "Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\". The resulting entity body MAY be short and stout."
              }
            </Quote>
            <Cite>
              <Link href="https://tools.ietf.org/html/rfc2324">
                {"Network Working Group: RFC2323"}
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
