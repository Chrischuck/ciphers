import scala.collection.mutable.{Map}

// no column length because that will change depending on the length of plaintext
class DoubleTransposition(val r: Int, val k: Map[String, Array[Array[Int]]]) {
  var rows: Int = r
  var key: Map[String, Array[Array[Int]]] = k

  def encrypt(plaintext: String): String =  {
    val matrix = Array[Array[String]]()

    var count = 0
    var row = Array[String]()
    for (l <- plaintext) {
      if (count < this.rows) {
        row :+ l
        count += 1
      } else {
        matrix :+ row
        row = Array()
        count = 0
      }
    }


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
    println(dt.encrypt("hi"))
  }
}