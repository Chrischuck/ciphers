import scala.collection.mutable.{Map}

// no rows length because that will change depending on the length of plaintext
class DoubleTransposition(val c: Int, val k: Map[String, Array[Array[Int]]]) {
  var columns: Int = c
  var key: Map[String, Array[Array[Int]]] = k

  def encrypt(plaintext: String): String =  {
    val matrix = Array.ofDim[Char](math.ceil(plaintext.length().toDouble / this.columns.toDouble).toInt, this.columns)

    var count = 0
    var rowCount = 0

    for (l <- plaintext) {
      matrix(rowCount)(count) = l
      count += 1
      if (count >= this.columns) {
        count = 0
        rowCount += 1
      }
    }
    println(matrix.map(_.mkString).mkString("\n"))

    return plaintext
  }
}

object Run {
  def main(agrs: Array[String]) {
    // Each pair is a swap, either for rows or columns
    val key = Map(
      "rows" -> Array(
        Array(0, 2),
        Array(4, 1)
      ),
      "columns" -> Array(
        Array(1, 2)
      )
    )

    val dt = new DoubleTransposition(3, key)
    println(dt.encrypt("fourscoreand"))
  }
}