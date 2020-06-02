export class Book {

  static readonly CATEGORIES = ['Arts & Photography',
    'Biographies & Memoirs',
    'Business & Money',
    'Calendars',
    'Childrens Books',
    'Christian Books & Bibles',
    'Comics & Graphic Novels',
    'Computers & Technology',
    'Cookbooks, Food & Wine',
    'Crafts, Hobbies & Home',
    'Education & Teaching',
    'Engineering & Transportation',
    'Health, Fitness & Dieting',
    'History',
    'Humor & Entertainment',
    'Law',
    'Lesbian, Gay, Bisexual & Transgender Books',
    'Literature & Fiction',
    'Medical Books',
    'Mystery, Thriller & Suspense',
    'Parenting & Relationships',
    'Politics & Social Sciences',
    'Reference',
    'Religion & Spirituality',
    'Romance',
    'Science & Math',
    'Science Fiction & Fantasy',
    'Self-Help',
    'Sports & Outdoors',
    'Teen & Young Adult',
    'Test Preparation',
    'Travel'];

  _id: string;
  title: string;
  author: string;
  publisher: string;
  category: string;
  image: string;
  ISBN: string;
  description: string;
  price: number;
  publication: string;
  createdAt: string;
}

