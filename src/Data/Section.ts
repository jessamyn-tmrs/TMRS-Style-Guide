export class Section {
  id: number | undefined;
  title: string = "";
  subtitle: string = "";
  description: string = "";
  imageUrl: string = "";
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.subtitle) this.subtitle = initializer.subtitle;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
  }
}
