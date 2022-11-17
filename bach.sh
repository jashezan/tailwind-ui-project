for file in $(find . -type f -iname "*.html")
do
  sed -i 's/shez4n/jashezan/g' $file;
  # echo $file;
done;