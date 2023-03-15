class Block {
    width;
    height;
    length;

    constructor([width, length, height]) {
        this.width = width;
        this.length = length;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.getWidth() * this.getLength() * this.getHeight();
    }

    getSurfaceArea() {
        return (
            (this.getWidth() * this.getHeight() +
                this.getWidth() * this.getLength() +
                this.getHeight() * this.getLength()) *
            2
        );
    }
}

let block = new Block([2, 4, 6]);

Test.assertEquals(block.getWidth(), 2);
Test.assertEquals(block.getLength(), 4);
Test.assertEquals(block.getHeight(), 6);
Test.assertEquals(block.getVolume(), 48);
Test.assertEquals(block.getSurfaceArea(), 88);
