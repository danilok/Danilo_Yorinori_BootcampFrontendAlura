/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import SectionTitle from '../../commons/SectionTitle';
import ProjectWrapper from './styles/ProjectWrapper';
import Box from '../../foundation/layout/Box';

export default function ProjectScreen({ project }) {
  return (
    <ProjectWrapper>
      <SectionTitle>
        {project.title}
      </SectionTitle>
      <Grid.Container
        paddingRight="16px"
        paddingLeft="16px"
      >
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
            }}
          >
            <ProjectWrapper.Image
              url={project.img}
              width={{
                xs: '328px',
                md: '660px',
              }}
              height={{
                xs: '200px',
                md: '400px',
              }}
            >
              <motion.div
                as={motion.div}
                whileHover={{
                  scale: 1.5,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
              >
                <img
                  src={project.img}
                  alt={project.slug}
                />
              </motion.div>
            </ProjectWrapper.Image>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
              lg: 8,
            }}
          >
            <Box
              textAlign="left"
            >
              {project.text && (
                <Box
                  dangerouslySetInnerHTML={{
                    __html: project.text,
                  }}
                />
              )}
              <Text
                tag="p"
                variant="paragraph1"
                fontWeight="700"
                color="primary.main"
              >
                Visite o site
              </Text>
              <Text
                tag="p"
                variant="paragraph1"
                color="secondary.main"
                href={project.url}
                target="_blank"
              >
                {project.url}
              </Text>
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </ProjectWrapper>
  );
}

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    highlight: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

ProjectScreen.defaultProps = {
  project: {},
};
