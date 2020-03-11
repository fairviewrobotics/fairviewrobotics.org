function importAll(r) {
  return r.keys().map(r);
}

const homePageImages = importAll(require.context('./images/we-are/', false, /\.(png|jpe?g|svg)$/));

export const weAreItems = homePageImages.map(src => ( {
  src,
  name: src.split('.')[0].split('/').slice(-1)[0]
}));

// Note Name corresponds to image name (.png) in the images/sponsors folder
// Sizes values are out of 100
const sponsors = [
  {
    name: 'Medtronic',
    size: 60,
    url: 'http://medtronic.com'
  },
  {
    name: 'Ball',
    size: 40,
    url: 'http://www.ball.com/aerospace'
  },
  {
    name: 'Premier Members Credit Union',
    size: 40,
    url: 'https://www.pmcu.org/'
  },
  {
    name: 'Wong Orthodontics',
    size: 20,
    url: 'https://drwongortho.com'
  },
  {
    name: 'McGuckin',
    size: 15,
    url: 'https://www.mcguckin.com/'
  },
];

const mapCompiledToRealName = (requiredContext) => {
  const keys = requiredContext.keys();
  const values = keys.map(requiredContext);
  return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
}

const sponsorImages = mapCompiledToRealName(require.context('./images/sponsors/', false, /\.(png|jpe?g|svg)$/));

export const sponsorItems = sponsors.map(sponsor => ( {
  ...sponsor,
  src: sponsorImages[Object.keys(sponsorImages).find(image => image.includes(sponsor.name))]
} ));

// TODO: run before build so user doesn't have to do it
// TODO: create thumbnails on runtime so that there aren't unnecessary image duplicates

const importPhotoGallery = (images, thumbnailImages) => {
  return images.map((image, index) => {
    return {
      src: image,
      thumbnail: thumbnailImages[index]
    };
  });
};

export const galleries = [
  {
    name: '2019 competition',
    images: importPhotoGallery(importAll(require.context("./images/2019/", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2019/thumbnails/", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2018 competition',
    images: importPhotoGallery(importAll(require.context("./images/2018-comp/", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2018-comp/thumbnails/", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2018 building',
    images: importPhotoGallery(importAll(require.context("./images/2018-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2018-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 competition',
    images: importPhotoGallery(importAll(require.context("./images/2017-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2017-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 building',
    images: importPhotoGallery(importAll(require.context("./images/2017-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2017-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 competition',
    images: importPhotoGallery(importAll(require.context("./images/2016-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 building',
    images: importPhotoGallery(importAll(require.context("./images/2016-build", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 Bag Night',
    images: importPhotoGallery(importAll(require.context("./images/2016-bag", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/2016-bag/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: 'Off season',
    images: importPhotoGallery(importAll(require.context("./images/off-season", false, /\.(png|jpe?g|svg)$/)),
      importAll(require.context("./images/off-season/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  }
];
