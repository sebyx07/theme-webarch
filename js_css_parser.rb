fileList = Array.new
barebone = Array.new
Dir.glob("**/*.html") do |htmlFile|
  File.open(htmlFile).each do |line|
  	re = /(assets.*?)\.(css|js)/
  	match = line.match(re)
  	unless match.nil?
  		if htmlFile == "barebone.html"
  			barebone <<  match.to_s
  		else
  			fileList <<  match.to_s
		end
	end
  end
end
fileList = fileList.uniq

File.open("js_css_list.txt", 'w') do |file|
	
	file.write("Don't forget to remove ',' from last element !!\n\n\nvar assetJs = [\n")

	re1 = /(assets.*?)\.js/
	re2 = /(assets.*?)\.css/
	fileList.each do |line|
		match = line.match(re1)
		unless match.nil?
			file.write("\tassetPath + \'#{match}\',\n")
		end
	end
	file.write("];\n\n\n\n\n\n")

	file.write("var assetCss = [\n")
	fileList.each do |line|
		match = line.match(re2)
		unless match.nil?
			file.write("\tassetPath + \'#{match}\',\n")
		end
	end
	file.write("];\n\n\n\n\n\n")

	file.write("var assetJs = [\n")
	barebone.each do |line|
		match = line.match(re1)
		unless match.nil?
			file.write("\tassetPath + \'#{match}\',\n")
		end
	end
	barebone - fileList.each do |line|
		match = line.match(re1)
		unless match.nil?
			file.write("\t\/\/assetPath + \'#{match}\',\n")
		end
	end

	file.write("];\n\n\n\n\n\n")

	file.write("var assetCss = [\n")
	barebone.each do |line|
		match = line.match(re2)
		unless match.nil?
			file.write("\tassetPath + \'#{match}\',\n")
		end
	end
	barebone - fileList.each do |line|
		match = line.match(re2)
		unless match.nil?
			file.write("\t\/\/assetPath + \'#{match}\',\n")
		end
	end
	file.write("];");
end