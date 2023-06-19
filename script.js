console.log("VUE OK", Vue);

const { createApp } = Vue;

createApp({
  data() {
    return {
      // Variable to store the autoplay interval
      autoplay: null,
      // Current index of the displayed image
      currentIndex: 0,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  computed: {
    isLastPicture() {
      // Check if the current index is the last image
      return this.currentIndex === this.images.length - 1;
    },
    isFirstPicture() {
      // Check if the current index is the first image
      return this.currentIndex === 0;
    },
  },
  methods: {
    goToNext() {
      if (this.isLastPicture) {
        // If it's the last image, go back to the first image
        this.currentIndex = 0;
      } else {
        // Otherwise, move to the next image
        this.currentIndex++;
      }
    },
    goToPrev() {
      if (this.isFirstPicture) {
        // If it's the first image, go to the last image
        this.currentIndex = 4;
      } else {
        // Otherwise, move to the previous image
        this.currentIndex--;
      }
    },
    setCurrentIndex(targetIndex) {
      // Set the current index to the specified target index
      this.currentIndex = targetIndex;
    },
    stopAutoPlay() {
      // Clear the autoplay interval
      clearInterval(this.autoplay);
    },
    startAutoPlay() {
      // Start autoplay by setting an interval to go to the next image
      this.autoplay = setInterval(this.goToNext, 3000);
    },
  },
  // LifeCycle Methods
  mounted() {
    // Start autoplay when the component is mounted
    this.startAutoPlay();
  },
}).mount("#root");
