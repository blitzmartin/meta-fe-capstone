import { Link } from 'react-router-dom';
import { MainContainer, Section } from '../../shared';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

export const HomePage = () => {
/*      fetch('https://api.unsplash.com/search/photos?query=food&per_page=10', {
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
     })
          .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    }); */

     return (
          <MainContainer id="main">
               <Section isHighlighted>
                    <h1 className='text-3xl font-bold font-header'>Welcome to the Restaurant</h1>
                    <p className='text-gray-800 mt-4'>
                         You can reserve a table in advance. Click on button and follow instructions!</p>
                    <Link aria-label='Go to booking page' to='booking' className='rounded-xl bg-lemonGreen text-lemonYellow px-3 py-1'>Reserve a table</Link>
               </Section>
          </MainContainer>
     );
};


/*
UNSPLASH IMAGE OBJECT:

alt_description
:
"Pesto pasta with sliced tomatoes served on white ceramic plate"
alternative_slugs
:
{en: 'pesto-pasta-with-sliced-tomatoes-served-on-white-ceramic-plate-12eHC6FxPyg', es: 'pasta-al-pesto-con-tomates-en-rodajas-servida-en-plato-de-ceramica-blanca-12eHC6FxPyg', ja: 'スライスしたトマトを白い陶器の皿に乗せたペストパスタ-12eHC6FxPyg', fr: 'pates-au-pesto-et-tomates-tranchees-servies-sur-une-assiette-en-ceramique-blanche-12eHC6FxPyg', it: 'pasta-al-pesto-con-pomodori-a-fette-servita-su-piatto-di-ceramica-bianca-12eHC6FxPyg', …}
asset_type
:
"photo"
blur_hash
:
"L[NTt0.At8V=s,oga}j[oha_WBae"
breadcrumbs
:
[]
color
:
"hexcode"
created_at
:
"2016-09-05T16:35:26Z"
current_user_collections
:
[]
description
:
"Pesto Pasta"
height
:
3064
id
:
"12eHC6FxPyg"
liked_by_user
:
false
likes
:
1458
links
:
{self: 'https://api.unsplash.com/photos/pesto-pasta-with-s…omatoes-served-on-white-ceramic-plate-12eHC6FxPyg', html: 'https://unsplash.com/photos/pesto-pasta-with-slice…omatoes-served-on-white-ceramic-plate-12eHC6FxPyg', download: 'https://unsplash.com/photos/12eHC6FxPyg/download?i…xfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTczNTg5NzgxMnww', download_location: 'https://api.unsplash.com/photos/12eHC6FxPyg/downlo…xfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTczNTg5NzgxMnww'}
promoted_at
:
"2016-09-05T16:35:26Z"
slug
:
"pesto-pasta-with-sliced-tomatoes-served-on-white-ceramic-plate-12eHC6FxPyg"
sponsorship
:
null
topic_submissions
:
{food-drink: {…}}
updated_at
:
"2024-12-29T20:53:23Z"
urls
:
{raw: 'https://images.unsplash.com/photo-1473093295043-cd…xmb29kfGVufDB8fHx8MTczNTg5NzgxMnww&ixlib=rb-4.0.3', full: 'https://images.unsplash.com/photo-1473093295043-cd…kfGVufDB8fHx8MTczNTg5NzgxMnww&ixlib=rb-4.0.3&q=85', regular: 'https://images.unsplash.com/photo-1473093295043-cd…B8fHx8MTczNTg5NzgxMnww&ixlib=rb-4.0.3&q=80&w=1080', small: 'https://images.unsplash.com/photo-1473093295043-cd…DB8fHx8MTczNTg5NzgxMnww&ixlib=rb-4.0.3&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1473093295043-cd…DB8fHx8MTczNTg5NzgxMnww&ixlib=rb-4.0.3&q=80&w=200', …}
user
:
{id: 'YwVDWzX7Y3s', updated_at: '2024-11-03T17:36:40Z', username: 'eaterscollective', name: 'Eaters Collective', first_name: 'Eaters', …}
width
:
4592

*/
