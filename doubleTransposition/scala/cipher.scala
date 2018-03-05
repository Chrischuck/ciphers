import scala.collection.mutable.{Map}

// no rows length because that will change depending on the length of plaintext
class DoubleTransposition(val c: Int, val k: Map[String, Array[Array[Int]]]) {
  var columns: Int = c
  var key: Map[String, Array[Array[Int]]] = k

  def encrypt(plaintext: String): String = {
    return this.process(plaintext, true)
  }

  def decrypt(ciphertext: String): String = {
    return this.process(ciphertext, false)
  }

  def process(text: String, encrypt: Boolean): String =  {
    val rows: Int = math.ceil(text.length().toDouble / this.columns.toDouble).toInt
    val matrix = Array.ofDim[Char](rows, this.columns)

    var count = 0
    var rowCount = 0

    for (l <- text) {
      matrix(rowCount)(count) = l
      count += 1
      if (count >= this.columns) {
        count = 0
        rowCount += 1
      }
    }

    val rowTranspositions = if (encrypt) this.key.get("rows").get else this.key.get("rows").get.reverse
    val columnTranspositions = if (encrypt) this.key.get("columns").get else this.key.get("columns").get.reverse

    // row transpositions
    for (transposition <- rowTranspositions) {
      if (matrix.length > transposition(0) && matrix.length > transposition(1)) {
        val temp = matrix(transposition(0))
        matrix(transposition(0)) = matrix(transposition(1))
        matrix(transposition(1)) = temp
      }
    }

    // column transpositions
    for (transposition <- columnTranspositions) {
      if (matrix(0).length > transposition(0) && matrix(0).length > transposition(1)) {
        for (i <- 0 to rows - 1) {
          val temp = matrix(i)(transposition(0))
          matrix(i)(transposition(0)) = matrix(i)(transposition(1))
          matrix(i)(transposition(1)) = temp
        }
      }
    }

    return this.arrayToString(matrix)
  }

  def arrayToString(matrix: Array[Array[Char]]): String = {
    var cipherText = ""
    for (row <- matrix) {
      for (char <- row) {
        cipherText += char
      }
    }
    return cipherText
  }

}

object Run {
  def main(agrs: Array[String]) {
    // Each pair is a swap, either for rows or columns
    val key = Map(
      "rows" -> Array(
        Array(0, 2),
        Array(4, 1),
        Array(3, 6)
      ),
      "columns" -> Array(
        Array(1, 2),
        Array(0, 2),
      )
    )

    val dt = new DoubleTransposition(4, key)
    val cipherText: String = dt.encrypt("fourscoreandsevenyearsago")
    println(cipherText)
    println(dt.decrypt(cipherText))
    
  }
}