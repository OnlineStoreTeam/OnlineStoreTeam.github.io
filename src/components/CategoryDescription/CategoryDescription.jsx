import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
const TextCategory = styled(Typography)`
  text-align: center;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

function CategoryDescription({categoryName}) {
    const [ categoryDescription, setCategoryDescription ] = useState('');
    const [ categoryTitle, setCategoryTitle ] = useState('');

    const changeCategoryDescription = () => {
        switch (categoryName?.toLowerCase()) {
        case "all products":
            setCategoryTitle("Premium Dog Products");
            setCategoryDescription(
            "We understand that your furry friend deserves nothing but the best. Discover a delightful array of high-quality products designed to enhance your dog's comfort, happiness, and well-being."
            );
            break;
        case "clothing":
            setCategoryTitle("Clothes Collection");
            setCategoryDescription(
            "Explore our exclusive collection of high-quality dog clothes designed to keep your furry friend both stylish and comfortable. Find the perfect fit for your dog and elevate their wardrobe today."
            );
            break;
        case "leads&harnesses":
            setCategoryTitle("Leads&Harnesses");
            setCategoryDescription(
            "Discover a wide range of high-quality dog leads and harnesses designed for your furry friend's comfort. Shop now for the perfect walking companion! You can trust that our products are built to last, providing years of reliable use."
            );
            break;
        case "collars":
            setCategoryTitle("Dog Collars");
            setCategoryDescription(
            "Choosing the right dog collar is an important decision for any pet owner. With our range of options you can find a collar that keeps your furry friend safe, stylish, and comfortable. Explore a wide variety of dog collars from trusted brands. "
            );
            break;
        case "toys":
            setCategoryTitle("Dog Toys");
            setCategoryDescription(
            "Browse our wide selection of dog toys, carefully curated to cater to all breeds, sizes, and play styles. From tough chew toys to adorable plushies, we have something for every furry friend!"
            );
            break;
        case "furniture":
            setCategoryTitle("Stylish Dog Furniture");
            setCategoryDescription(
            "Give your furry friend the gift of a good night's sleep with our range of luxury dog beds. Crafted from high-quality materials and designed for both comfort and aesthetics, our beds provide your dog with the perfect place to rest."
            );
            break;
        case "care":
            setCategoryTitle("Dog Care Supplies");
            setCategoryDescription(
            "Your dog's well-being is a top priority. That's why we've curated a comprehensive catalog of high-quality dog care supplies designed to keep your furry friend happy, healthy, and well-cared for."
            );
            break;
        default: 
        setCategoryTitle("Premium Dog Products");
        setCategoryDescription(
        "We understand that your furry friend deserves nothing but the best. Discover a delightful array of high-quality products designed to enhance your dog's comfort, happiness, and well-being."
        );
        }
    };

    useEffect(() => {
        changeCategoryDescription();
    }, [categoryName]);

  return (
    <Box
      component="div"
      pb={8}
      pt={{ sm: 4, md: 3, lg: 4}}
      sx={{ height: "auto", margin: "0 auto" }}
      width={{ sm: '382px', md: '458px', lg: '572px' }}
    >
      <Typography 
        component="h1" 
        align="center" 
        variant="h1"
        >
        {categoryTitle}
      </Typography>
      <TextCategory 
        variant="h5" 
        component="p"
        >
        {categoryDescription}
      </TextCategory>
    </Box>
  );
}
export default CategoryDescription;
