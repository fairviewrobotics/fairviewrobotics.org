function importAll(r: any) {
  return r.keys().map(r);
}

const homePageImages = importAll((require as any).context('./images/we-are/', false, /\.(png|jpe?g|svg)$/));

export const weAreItems = homePageImages.map((src: string) => ( {
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
    name: 'CoorsTek',
    size: 60,
    url: 'https://www.coorstek.com/'
  },
  {
    name: 'BlueCanyon',
    size: 30,
    url: 'http://bluecanyontech.com/'
  },
  {
    name: 'Sketchup',
    size: 40,
    url: 'https://www.sketchup.com/'
  },
  {
    name: 'Ball',
    size: 30,
    url: 'http://www.ball.com/aerospace'
  },
  {
    name: 'Cosmos',
    size: 20,
    url: 'http://cosmospizza.com/'
  },
  {
    name: 'Madwire',
    size: 30,
    url: 'https://www.madwire.com/'
  },
  {
    name: 'Spire',
    size: 30,
    url: 'https://spire.com/'
  },
  {
    name: 'NIST',
    size: 20,
    url: 'http://www.nist.gov/'
  },
  {
    name: 'McGuckin',
    size: 20,
    url: 'https://www.mcguckin.com/'
  },
  {
    name: 'TheSink',
    size: 15,
    url: 'https://thesink.com/'
  }
];

const mapCompiledToRealName = (requiredContext: any) => {
  const keys = requiredContext.keys();
  const values = keys.map(requiredContext);
  return keys.reduce((o: any, k: any, i: any) => { o[k] = values[i]; return o; }, {});
}

const sponsorImages = mapCompiledToRealName((require as any).context('./images/sponsors/', false, /\.(png|jpe?g|svg)$/));

export const sponsorItems = sponsors.map(sponsor => ( {
  ...sponsor,
  src: sponsorImages[Object.keys(sponsorImages).find(image => image.includes(sponsor.name)) as any]
} ));

// TODO: run before build so user doesn't have to do it

const importPhotoGallery = (images: any[], thumbnailImages: any[]) => {
  return images.map((image, index) => {
    return {
      src: image,
      thumbnail: thumbnailImages[index]
    };
  });
};

export const galleries = [
  {
    name: '2018 competition',
    images: importPhotoGallery(importAll((require as any).context("./images/2018-comp/", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2018-comp/thumbnails/", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2018 building',
    images: importPhotoGallery(importAll((require as any).context("./images/2018-build", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2018-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 competition',
    images: importPhotoGallery(importAll((require as any).context("./images/2017-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2017-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2017 building',
    images: importPhotoGallery(importAll((require as any).context("./images/2017-build", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2017-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 competition',
    images: importPhotoGallery(importAll((require as any).context("./images/2016-comp", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2016-comp/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 building',
    images: importPhotoGallery(importAll((require as any).context("./images/2016-build", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2016-build/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: '2016 Bag Night',
    images: importPhotoGallery(importAll((require as any).context("./images/2016-bag", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/2016-bag/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  },
  {
    name: 'Off season',
    images: importPhotoGallery(importAll((require as any).context("./images/off-season", false, /\.(png|jpe?g|svg)$/)),
      importAll((require as any).context("./images/off-season/thumbnails", false, /\.(png|jpe?g|svg)$/)))
  }
];
