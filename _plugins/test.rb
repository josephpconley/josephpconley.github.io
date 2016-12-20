=begin
author: eric-cc-su

This is a ruby script that automates Minddust's method to implement categories and tags for Jekyll generator, which conforms
to GitHub Pages' safe mode execution (no custom plugins are run by GitHub Pages serves)

Minddust's method: http://www.minddust.com/post/tags-and-categories-on-github-pages/

This code is licensed under the MIT License (end of file) and under copyright by Eric Su
=end

require 'fileutils'

module CatTag
    $base = Dir.pwd #Save the project root directory
    if not $base.split("/")[-1].include?('.github')
        Dir.chdir("../")
        $base = Dir.pwd
    end

    class PostIndex < Jekyll::Generator
        def generate(site)
            print($base)
            @list = [] # Compilation of all blog post data
            @cat_list = check_source("blog/category") # Get current categories
            @tag_list = check_source("blog/tag") # Get current tags
            @pcat_list = [] # New categories
            @ptag_list = [] # New tags
            dpath = File.join($base, "_posts")
            Dir.foreach(dpath) {
                |file|

                if not ['.', '..'].include?(file)
                    data = Hash.new

                    onepost = open(File.join(dpath, file))
                    oneline = onepost.readline
                    if not oneline.include?('---')
                        while not oneline.include?('---') # Search for opening --- in front matter
                            oneline = onepost.readline
                        end
                    else
                        oneline = onepost.readline
                        while not oneline.include?('---') # Read front matter
                            keyval = oneline.split(":")
                            data[keyval[0].strip] = keyval[1].strip
                            oneline = onepost.readline
                        end
                    end
                    @list << data
                    onepost.close
                end
            }

            compile_post_data(@list)
            construct("category", @pcat_list)
            construct("tag", @ptag_list)
        end

        def check_source(rel_path)
            source_list = []
            dpath = File.join($base, rel_path)
            Dir.foreach(dpath) {
                |file|
                if not ['.', '..'].include?(file)
                    source_list << file.gsub(".md", "")
                end
            }
            return source_list
        end

        def compile_post_data(data_array)
            data_array.each do |item|
                if not @cat_list.include?(item['category'])
                    @pcat_list << item['category']
                end
                item['tags'].gsub("[", "").gsub("]", "").split(",").each do |subitem|
                    subitem = subitem.strip
                    if not @tag_list.include?(subitem)
                        @ptag_list << subitem
                    end
                end
            end

            def construct(type, data_array)
                dpath = File.join($base, "blog/", type)
                if not File.directory?(dpath)
                    FileUtils.mkdir_p(dpath)
                end

                ytype = type
                case type
                    when "tag"
                        ytype = "tags"
                    when "category"
                        ytype = "categories"
                end
                yfname = File.join($base, "_data/", ytype+".yml")

                data_array.each do |filename|
                    begin
                        fname = File.join(dpath, String.try_convert(filename)+".md")
                        newfile = open(fname, "w")
                        newfile.puts("---")
                        newfile.puts("layout: "+type)
                        newfile.puts(type+": "+filename)
                        newfile.puts("permalink: " + File.join("/blog", type, filename)+"/")
                        newfile.puts("---")
                        newfile.close()

                        ycfile = open(yfname, "a")
                        ycfile.puts("\n\n- slug: " + filename)
                        ycfile.write("  name: " + filename.capitalize.gsub("-", " "))
                        ycfile.close()
                    rescue
                    end
                end
            end
        end
    end
end

=begin
The MIT License (MIT)

Copyright (c) 2015 Eric Su

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
=end