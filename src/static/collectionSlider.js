// collectionSlider.js
export function initializeCollectionSlider() {
    // Get all the collectionArticleWrapper elements
    const collectionWrappers = document.querySelectorAll('.collectionArticleWrapper');
  
    // Enable click and drag functionality for each collectionArticleWrapper
    collectionWrappers.forEach(collectionWrapper => {
      let isDown = false;
      let startX;
      let scrollLeft;
  
      collectionWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - collectionWrapper.offsetLeft;
        scrollLeft = collectionWrapper.scrollLeft;
      });
  
      collectionWrapper.addEventListener('mouseleave', () => {
        isDown = false;
      });
  
      collectionWrapper.addEventListener('mouseup', () => {
        isDown = false;
      });
  
      collectionWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - collectionWrapper.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scroll speed here
        collectionWrapper.scrollLeft = scrollLeft - walk;
      });
    });
  }
  