printf "\n==> Calculator Build Program <==\n\n"
printf "Do you want to run npm install? (yes/no): "
read doInstall
if [ "$doInstall" == "yes" ]; then
  npm install
fi
printf "\n\nPlease select build mode\n\n1. Production\n2. Staging\n3. Development\n\nEnter Mode: "
read inputMode
inputMode=$((inputMode - 1))
declare -a mode=(
    "production"
    "staging"
    "development"   
)
buildMode=${mode[inputMode]}

if [ "$buildMode" == "production" ]; then
  echo "Build is ${buildMode}"
  npm run build:prod
elif [ "$buildMode" == "staging" ]; then
  echo "Build is ${buildMode}"
  npm run build:staging
elif [ "$buildMode" == "development" ]; then
  echo "Build is ${buildMode}"
  npm run build:dev
else 
    echo "Invalid input provided terminating build process"
    exit 1
fi
if [[ -d "build/${buildMode}" ]]; then
    mv "build/${buildMode}" "build/${buildMode}-old"    
fi
mv "build/${buildMode}-new" "build/${buildMode}"
rm -rf "build/${buildMode}-old"