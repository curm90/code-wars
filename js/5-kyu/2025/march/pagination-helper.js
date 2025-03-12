// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection?.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) return -1;

    if (this.itemsPerPage > this.collection.length) {
      return this.collection.length;
    }

    if (pageIndex + 1 < this.pageCount()) {
      return this.itemsPerPage;
    }

    return this.collection.length - pageIndex * this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const collection = [1, 2];
const helper = new PaginationHelper(collection, 1);
console.log(helper);

console.log(helper.pageCount(), 2);
console.log(helper.itemCount(), 2);

console.log(helper.pageItemCount(0), 1);
console.log(helper.pageItemCount(1), 1);
console.log(helper.pageItemCount(2), -1);
console.log(helper.pageItemCount(3), -1);
console.log(helper.pageItemCount(4), -1);

console.log(helper.pageIndex(5), 2);
console.log(helper.pageIndex(11), -1);
console.log(helper.pageIndex(21), -1);
console.log(helper.pageIndex(-10), -1);
console.log(helper.pageIndex(30), -1);
