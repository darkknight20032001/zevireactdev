import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductSectionList.sass";
import { Products } from "../../../../Interfaces/Products";
import HoverButton from "./HoverButton/HoverButton";
import { Rating } from "@mui/material";

const ProductSectionList: React.FC<{ productList: Products }> = ({
  productList,
}) => {
  const [liked, setLiked] = React.useState<boolean>(false);
  const [mouseHover, setMouseHover] = React.useState<Boolean>(false);

  return (
    <div className="product-card">
      <Card sx={{ maxWidth: 345 }} className="inner-cards">
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
          >
            <FavoriteIcon className={liked ? "likeBtn" : "noLikeBtn"} />
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          height="194"
          image={productList.image}
          alt="Paella dish"
          onMouseEnter={() => {
            setMouseHover(true);
          }}
          onMouseLeave={() => {
            setMouseHover(false);
          }}
        />
        <HoverButton mouseHover={mouseHover} setMouseHover={setMouseHover} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {productList.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productList.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="read-only"
              value={Number(productList.rating)}
              readOnly
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default ProductSectionList;
