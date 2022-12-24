import React, { useState } from "react";
import Navbar from ".";
import NavbarToggle from "./NavbarToggle";
import { LongLogo, SquareLogo } from "../../content/Logo/index.stories";
import { SocialIcons } from "../../content/SocialIcon/index.stories";
import { CategoryLinks, CategoryMenu } from "../Nav/index.stories";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Modal from "../../Modal";
import { FooterHeading } from "../../content/Heading/index.stories";
import {
  FooterSubscribeForm,
  HeaderSubscribeForm,
} from "../../inputs/Input/index.stories";
import Link from "../Link";
import Text from "../../content/Text";
import { FooterCopyright } from "../../content/Copyright/index.stories";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
  subcomponents: {
    NavbarToggle,
  },
};

// TODO: seperate out modal story ya dig
export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Navbar fixed>
      <Grid wrap="nowrap" justify="space-between" alignItems="center" gap="lg">
        <GridItem xs="auto">
          <Link to="#">
            <LongLogo />
          </Link>
        </GridItem>
        <GridItem xs="auto">
          <Grid wrap="nowrap" alignItems="center" justify="flex-end" gap="lg">
            <GridItem xs={0} lg>
              <CategoryMenu />
            </GridItem>
            <GridItem xs="auto">
              <Grid wrap="nowrap" gap="sm" alignItems="center">
                <GridItem xs={0} lg>
                  <SocialIcons />
                </GridItem>
                <GridItem xs={0} lg="auto">
                  <HeaderSubscribeForm />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem xs="auto" lg={0}>
              <NavbarToggle onToggle={toggleModal} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      <Modal isOpen={modalOpen} onClose={toggleModal}>
        Testing this modal thang
      </Modal>
    </Navbar>
  );
};

export const Footer = () => (
  <Navbar padding="md">
    <Grid justify="center" gap="lg" bottomMargin>
      <GridItem xs={12} lg>
        <FooterHeading />
        <Text Tag="span" size="small" lHeight="solid">
          As an Amazon Associate, we earn money for referring qualifying
          purchases. Our referrals to Amazon and other sites will never increase
          your price. Our goal is to curate the best glowy products, and
          comissions will always come second to serving our community.
        </Text>
      </GridItem>
      <GridItem xs={12} lg>
        <FooterHeading />
        <Grid
          justify="space-between"
          alignItems="stretch"
          direction="column"
          wrap="nowrap"
          gap="md"
        >
          <GridItem>
            <CategoryLinks />
          </GridItem>
          <GridItem>
            <SquareLogo />
          </GridItem>
          <GridItem xs={0} lg>
            <FooterCopyright />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem xs={12} lg>
        <FooterHeading />
        <Grid
          alignItems="stretch"
          alignContent="space-between"
          justify="flex-end"
        >
          <GridItem xs lg={12}>
            <FooterSubscribeForm />
          </GridItem>
          <GridItem xs="auto">
            <SocialIcons />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem xs={12} lg={0}>
        <FooterCopyright />
      </GridItem>
    </Grid>
  </Navbar>
);
