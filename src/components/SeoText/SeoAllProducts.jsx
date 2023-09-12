import { Typography, Container } from "@mui/material";

function SeoAllProducts (){

    return (
        <Container disableGutters>
            <Typography component="p" variant="h5" lineHeight="150%" mb={8}>From cozy beds to stylish apparel, interactive toys to nutritious treats, our curated collection offers a wide range of items to cater to your dog's every need. Each product is thoughtfully selected to ensure your canine companion experiences ultimate joy and care. Experience the joy of pampering your beloved companion with the finest dog products available. Our commitment to quality ensures that your dog receives the care they truly deserve. Explore our catalog now and elevate your dog's lifestyle to new heights of comfort and happiness!</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Comfortable Rest</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Explore our luxurious dog beds and cozy sleeping options that provide your pup with the perfect place to unwind after a day of play.  Plush Bolster Bed for Small Breeds, Cozy Donut Cuddler Bed  - our beds provide optimal support and comfort, ensuring your canine companion enjoys restful sleep</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Tail-Wagging Fashion</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Dress your furry friend in style with our trendy dog apparel, from adorable sweaters to practical raincoats, making walks and outings a fashion statement. Waterproof raincoats, doggie bandanas in various prints, adorable dog bowties or reflective safety vests for night walks our clother collection combines fashion and function!</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Engaging Playtime</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Choose from an assortment of interactive toys that keep them entertained for hours on end.</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Grooming and Wellness</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Discover grooming products that promote your dog's hygiene and well-being, from gentle shampoos to effective tick and flea solutions.</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Travel Essentials</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Make adventures with your dog stress-free with our travel-friendly accessories, including collapsible bowls, comfortable carriers, and more.</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={6}>Stylish Collars and Durable Leads</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={{sm: 2, md: 8, lg:8}}>Ensure your dog's safety and style during walks with our exquisite collection of collars and leads. Choose from a range of designs and materials that blend fashion and functionality seamlessly..</Typography>
        </Container>
    )
}

export default SeoAllProducts;