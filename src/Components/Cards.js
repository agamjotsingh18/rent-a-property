import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import Data from "./Data";

const Cards= ({values})=> {
  const {
    id,
    imageUrl,
    imageAlt,
    title,
    formattedPrice,
    rating,
    beds,
    baths,
    reviewCount,
    newBadge
  } = values;
  return (
    <>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  key={id}
                  m={5}
                >
                  <Image src={imageUrl} alt={imageAlt} />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                     {newBadge ?
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      :""
                     }
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {beds} beds &bull; {baths} baths
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {title}
                    </Box>

                    <Box>
                      {formattedPrice}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                      </Box>
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < rating ? "teal.500" : "gray.300"}
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {reviewCount} reviews
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
          
  );
}

export default Cards;
