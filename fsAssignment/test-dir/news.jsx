import React from 'react';

const NewsArticle = () => {
  return (
    <div className="news-article">
      <header className="article-header">
        <h1>Sunset Over the Countryside: A Moment of Peace</h1>
        <p className="article-date">March 19, 2025 | By John Doe</p>
      </header>
      <section className="article-body">
        <p>The sun dipped low on the horizon, painting the sky in hues of orange and pink. The quiet countryside, with its rolling hills and blooming wildflowers, seemed to stand still in time. Birds sang softly, their melodies carried by the gentle evening breeze. It was as if the world was taking a deep breath, savoring the peace of the moment.</p>

        <p>In the distance, an old cottage stood, its stone walls worn by the years but still solid, reflecting the stories of generations. Inside, the steady ticking of a wooden clock could be heard, marking the passage of time in a room warmed by the crackling fire in the hearth. Despite the busy world outside, this small corner of nature and history offered a rare sense of tranquility.</p>

        <p>As we rush through our busy lives, moments like these serve as gentle reminders of the beauty in simplicity. In the countryside, the quiet hours of sunset offer a peaceful escape from the noise of the modern world.</p>
      </section>
      <footer className="article-footer">
        <p>For more peaceful moments, follow our daily updates.</p>
      </footer>
    </div>
  );
};

export default NewsArticle;
