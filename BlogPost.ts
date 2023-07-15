class BlogPost {
  private title: string;
  private content: string;
  private author: string;
  private publishDate: Date;

  constructor(title: string, content: string, author: string, publishDate: Date) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishDate = publishDate;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getAuthor(): string {
    return this.author;
  }

  getPublishDate(): Date {
    return this.publishDate;
  }

  // Other methods for working with blog posts can be added here
}

// Example usage
const post = new BlogPost(
  "Getting Started with TypeScript",
  "TypeScript is a statically typed superset of JavaScript...",
  "John Doe",
  new Date()
);

console.log(post.getTitle());
console.log(post.getAuthor());
console.log(post.getPublishDate());
