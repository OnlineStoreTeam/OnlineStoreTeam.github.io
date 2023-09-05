import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { CategoryNameContext } from "../../components/Context";

const TextCategory = styled(Typography)`
  width: 572px;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

function CategoryDescription() {
    const { categoryName, setCategoryName } = useContext(CategoryNameContext);
    const initialCategoryName = useRef(categoryName);
    const [ categoryDescription, setCategoryDescription ] = useState('');
    const [ categoryTitle, setCategoryTitle ] = useState('');
    
    const changeCategoryDescription = () => {
        switch (categoryName.toLowerCase()) {
        case "all products":
            setCategoryTitle("Premium Dog Essentials Catalog");
            setCategoryDescription(
            "We understand that your furry friend deserves nothing but the best. Discover a delightful array of high-quality products designed to enhance your dog's comfort, happiness, and well-being "
            );
            break;
        case "clothing":
            setCategoryTitle("Clothes Collection");
            setCategoryDescription(
            "Transform your dog's style with our exquisite collection of canine clothing. From cozy sweaters to trendy jackets and adorable costumes, elevate your pet's look with our fashionable attire."
            );
            break;
        case "leads&harnesses":
            setCategoryTitle("Leads&Harnesses Collection");
            setCategoryDescription(
            "Discover premium dog leads & harnesses that blend style & functionality. Whether for walks or control, our collection offers the perfect accessory for your beloved companion."
            );
            break;
        case "collars":
            setCategoryTitle("Collars Collection");
            setCategoryDescription(
            "Discover a diverse range of dog collars that combine style and function seamlessly. From elegant leather to adjustable nylon, find the perfect collar for your beloved canine companion."
            );
            break;
        case "toys":
            setCategoryTitle("Toys Collection");
            setCategoryDescription(
            "Explore our captivating collection of dog toys, designed to provide endless joy. From interactive puzzles to durable chew toys, keep your furry friend entertained and engaged."
            );
            break;
        case "forniture":
            setCategoryTitle("Forniture Collection");
            setCategoryDescription(
            "Elevate your dog's well-being with our extensive selection of premium care products. From grooming items to health essentials, prioritize your pet's vitality, comfort, and joy."
            );
            break;
        case "care":
            setCategoryTitle("Care Collection");
            setCategoryDescription(
            "Nurture your dog's overall well-being with our comprehensive range of premium care products. From grooming to health essentials, prioritize your pet's vitality and happiness."
            );
            break;
        }
    };

    useEffect(() => {
        if (categoryName !== initialCategoryName.current) {
        changeCategoryDescription();
        initialCategoryName.current = categoryName;
        }
    }, [categoryName]);

  return (
    <Box
      component="div"
      pb={4.5}
      sx={{ width: "572px", height: "auto", margin: "0 auto" }}
    >
      <Typography component="h1" align="center" sx={{ fontSize: "38px" }}>
        {categoryTitle}
      </Typography>
      <TextCategory variant="h5" component="p">
        {categoryDescription}
      </TextCategory>
    </Box>
  );
}
export default CategoryDescription;
