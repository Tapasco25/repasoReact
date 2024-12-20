import { ImageListItem, ImageList } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img
            src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={image.alt || "Imagen de la galería"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
