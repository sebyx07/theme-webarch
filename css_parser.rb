Dir.glob("**/*.css") do |cssFile|
  File.foreach(cssFile, "\n") do |line|
	  	line.split("{").each do |l|
	  		re = /url\(.*\)/
	  		match = l.match(re)
		  	unless match.nil?
		  		ff = match.to_s.split("url")
		  		ff.each do |url|
		  			unless url.empty?
		  				name = cssFile.gsub(/lib\//,'')
					    depth = url.to_s.scan(/\.\.\//).size + 1
			  			nameArr = name.split('/')
			  			depth.times do |i|
			  				nameArr.pop
			  			end
			  			path = nameArr.join("/")
			  			url = url.to_s.split(/(\(\'?\"?|\'?\"?\))/)[2].to_s
			  			bakurl = url
			  			url = url.split(/(\.\.\/)+/)
			  			url = (url - [""] - ["../"]).join
			  			path = "/" + path + "/" + url
			  			unless path.include? "http"
			  				#line = line.gsub(bakurl, path)

			  				#File.open(cssFile, 'w') do |file|
			  				#	file.puts line
			  				#end
			  				IO.write(cssFile, File.open(cssFile) {|f| f.read.gsub(bakurl, path)})
			  			end
		  			end
		  		end
			end
		end
	end
end