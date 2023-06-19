# Carousel Mono Array

## Delivery:

Given an array containing a list of five images, create a carousel.

## MILESTONE 1

First, let's create the static markup: build the container and insert a large image in the center: we will thus have the basic structure and styles ready to be able to focus only on the logical aspect.

## MILESTONE 2

Now let's remove all the static markup and insert all the images dynamically using the provided array and a simple for loop concatenating a template literal.
All images will be hidden, except the first one, which will have a specific class that will make it visible.
At the end of this phase we will end up with the same slider drawn up in milestone 1, but built dynamically through JavaScript.

## MILESTONE 3

When the user clicks on the arrows, the program will change the active image, which will therefore be displayed in place of the previous one.

### BONUS 1:

Add the carousel infinite loop. That is, if the first image is active and the user clicks the arrow to go to the previous image, the last one will appear and vice versa!

### BONUS 2:

Add display of all thumbnails to the bottom or right of the active large image, (use the attached screenshot for inspiration). All thumbnails will have a dark opacity layer, except for the one corresponding to the active image, which will instead have a colored border.
By clicking the arrows, in addition to changing the active image, you can manage the change of the active thumbnail.

# Procedure

1. recupero prev e next
2. creo una larray con le immagini
3. preparo la gestione dell'index
4. impostiamo la prima immagine come immagine di partenza
5. metto in ascolto il next
6. metto in ascolto il previous
