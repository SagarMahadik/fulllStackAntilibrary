const mongoose = require('mongoose');

const fancyItemSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter fancyItem's first name"]
  },
  lastName: {
    type: String
  },
  profilePicture: {
    type: String
  },
  genre: {
    type: String,
    enum: [
      'guidingLights',
      'luminaries',
      'mavericScientists',
      'menOfLetters',
      'theGrandPhilosophers',
      'architectsOfTheFuture'
    ],
    required: true
  },
  notableWork: {
    type: String,
    required: [true, 'Please enter notable work']
  },
  quotes: [
    {
      type: String,
      sparse: true
    }
  ],
  books: [
    {
      bookName: {
        type: String,
        sparse: true
      },
      bookURL: {
        type: String,
        sparse: true
      }
    }
  ],
  videos: [
    {
      videoName: {
        type: String,
        maxlength: [
          50,
          'A video description must have less or equal to 50 characters'
        ],
        sparse: true
      },
      videoURL: {
        type: String,
        sparse: true
      }
    }
  ],
  courses: [
    {
      courseName: {
        type: String,
        sparse: true
      },
      courseURL: {
        type: String,
        sparse: true
      },
      platform: {
        type: String,
        sparse: true
      }
    }
  ],
  researchPapers: [
    {
      researchPaperName: {
        type: String,
        sparse: true
      },
      researchPaperURL: {
        type: String,
        sparse: true
      }
    }
  ],
  interviews: [
    {
      interviewName: {
        type: String,
        sparse: true
      },
      interviewURL: {
        type: String,
        sparse: true
      }
    }
  ]
});

const FancyItem = mongoose.model('FancyItem', fancyItemSchema);

module.exports = FancyItem;
