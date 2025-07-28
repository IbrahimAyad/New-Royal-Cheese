import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Vincent V.",
      rating: 5,
      date: "1 week ago",
      text: "Best burger in Detroit! The Big Kahuna is incredible - that Hawaiian joint knows what they're doing. The $5 shake really is worth every penny.",
      verified: true
    },
    {
      name: "Jules W.",
      rating: 5,
      date: "5 days ago",
      text: "The Royale with Cheese is exactly what a quarter pounder should be. Great atmosphere, feels like you're in the movie. Service is fast and friendly.",
      verified: true
    },
    {
      name: "Mia W.",
      rating: 5,
      date: "3 days ago",
      text: "Love the Pulp Fiction theme! Food is amazing, especially the truffle fries. Perfect spot for Wayne State students with the discount.",
      verified: true
    },
    {
      name: "Marsellus W.",
      rating: 5,
      date: "2 weeks ago",
      text: "This is THE spot in Midtown. The burgers are fire, and the vibe is unmatched. Definitely coming back.",
      verified: true
    },
    {
      name: "Butch C.",
      rating: 5,
      date: "1 month ago",
      text: "Been coming here since they opened. Consistently excellent food and service. The happy hour deals are unbeatable!",
      verified: true
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-3xl">{star}</span>
              ))}
            </div>
            <span className="ml-3 text-2xl text-white font-bold">4.8</span>
            <span className="ml-2 text-gray-400">(3,127 Google Reviews)</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/Royale+with+Cheese/@42.3601,-83.0648,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d42.3601!4d-83.0648!16s%2Fg%2F11c0r0r0r0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'/%3E%3Cpath fill='%2334A853' d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'/%3E%3Cpath fill='%23FBBC05' d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z'/%3E%3Cpath fill='%23EA4335' d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'/%3E%3C/svg%3E" 
                 alt="Google" 
                 className="w-5 h-5 mr-2"
            />
            View All Reviews on Google
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
                {review.verified && (
                  <span className="text-xs text-green-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/Royale+with+Cheese/@42.3601,-83.0648,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d42.3601!4d-83.0648!16s%2Fg%2F11c0r0r0r0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;