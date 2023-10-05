import { Typography, Container } from "@mui/material";

function SeoToys (){

    return (
        <Container disableGutters>
            <Typography component="h2" variant="h2" fontWeight={700} mb={{sm: 0, md: 6, lg: 6}}>Perfect toys for your dog's playtime enjoyment</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={8}>Dogs are more than just pets; they are loyal companions and beloved members of our families. One of the best ways to show our furry friends love and care is through playtime. Dog toys are not just playthings; they're essential tools for keeping your dog mentally and physically stimulated. When choosing dog toys, always prioritize safety. Opt for toys made from non-toxic materials and avoid small parts that your dog could swallow. Supervise playtime, especially with new toys, to ensure your dog's safety.</Typography>
            <Typography component="h3" variant="h3" fontWeight={700} mb={6}>Types of Dog Toys</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Fetch Toys</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Playing with your dog strengthens the bond between you and your furry friend. Balls, frisbees, and sticks are perfect for a game of fetch. They encourage your dog to run and exercise, and the joy of retrieving brings a sense of accomplishment.</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Chew Toys</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Regular brushing and combing are essential for maintaining a healthy coat and reducing shedding. Our selection of brushes and combs is designed to cater to different coat types. From slicker brushes for long-haired breeds to deshedding tools for heavy shedders, we have the right grooming tools for you.</Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Squeaky Toys</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={6}>Squeaky toys mimic the sound of prey, making them particularly exciting for many dogs. These toys emit playful squeaks when bitten or squeezed, providing entertainment and engagement during playtime. </Typography>
            <Typography component="h4" variant="h5" fontWeight={700} mb={2}>Plush Toys</Typography>
            <Typography component="p" variant="h5" lineHeight="150%" mb={{sm: 2, md: 8, lg:8}}>Soft and cuddly plush toys are great for comfort and companionship. Plush toys provide comfort and companionship to dogs of all ages. They are soft and cuddly, making them perfect for dogs that enjoy snuggling with a plush friend. Look for plush toys with reinforced seams for added durability. Keep in mind that some dogs may enjoy gently chewing on their plush toys, while others prefer to treat them as comfort objects using them as pillows during naptime.</Typography>
        </Container>
    )
}

export default SeoToys;