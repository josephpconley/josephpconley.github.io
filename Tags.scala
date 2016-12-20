import java.io.PrintWriter

object Tags extends App {

  io.Source.fromFile("tags.csv").getLines.foreach { name =>
    val body =
      s"""
         |---
         |slug: $name
         |name: $name
         |---
       """.stripMargin.trim

    new PrintWriter(s"_tag_pages/$name.md") {
      write(body);
      close()
    }
    new PrintWriter(s"_tag_feeds/$name.md") {
      write(body);
      close()
    }
  }

}
