// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);

  const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4} bg={useColorModeValue("gray.100", "gray.800")}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={backgroundColor}>
        <Text mb={4} fontSize="xl" fontWeight="bold" textAlign="center">
          HDR Color Wheel Selector
        </Text>
        <Text>Hue: {hue}°</Text>
        <Slider aria-label="slider-hue" value={hue} min={0} max={360} onChange={(v) => setHue(v)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Text mt={4}>Saturation: {saturation}%</Text>
        <Slider aria-label="slider-saturation" value={saturation} min={0} max={100} onChange={(v) => setSaturation(v)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Text mt={4}>Lightness: {lightness}%</Text>
        <Slider aria-label="slider-lightness" value={lightness} min={0} max={100} onChange={(v) => setLightness(v)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Flex>
  );
};

export default Index;
